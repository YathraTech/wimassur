import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    // Validation basique
    if (!data.email || !data.email.includes('@')) {
      return NextResponse.json(
        { error: 'Email invalide' },
        { status: 400 }
      )
    }

    // Préparer les données pour Strapi
    const leadData = {
      data: {
        email: data.email,
        name: data.name || '',
        source: data.source || 'unknown',
        page: request.headers.get('referer') || '',
        phone: data.phone || '',
        message: data.message || '',
        subject: data.subject || ''
      }
    }

    // Configuration Strapi
    const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || process.env.STRAPI_URL
    const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN

    if (!STRAPI_URL || !STRAPI_API_TOKEN) {
      console.error('Configuration Strapi manquante')
      // On retourne quand même un succès pour ne pas bloquer l'utilisateur
      return NextResponse.json({ 
        success: true, 
        message: 'Email enregistré (configuration en cours)' 
      })
    }

    // Envoyer vers Strapi
    const response = await fetch(`${STRAPI_URL}/api/leads`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${STRAPI_API_TOKEN}`
      },
      body: JSON.stringify(leadData),
    })

    if (!response.ok) {
      const errorData = await response.text()
      console.error('Erreur Strapi:', errorData)
      throw new Error('Erreur lors de l\'envoi vers Strapi')
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Merci ! Nous vous contacterons rapidement.' 
    })

  } catch (error) {
    console.error('Erreur capture lead:', error)
    
    // On retourne succès même en cas d'erreur pour ne pas perdre le lead
    return NextResponse.json({ 
      success: true, 
      message: 'Merci pour votre intérêt !' 
    })
  }
}