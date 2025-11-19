import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { nombre, mail, nombreProyecto, mensaje } = body

    // Validar que todos los campos estén presentes
    if (!nombre || !mail || !nombreProyecto || !mensaje) {
      return NextResponse.json(
        { error: "Todos los campos son requeridos" },
        { status: 400 }
      )
    }

    // Validar que las variables de entorno estén configuradas
    if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      console.error("Variables de entorno SMTP no configuradas")
      return NextResponse.json(
        { error: "Configuración del servidor de email no disponible" },
        { status: 500 }
      )
    }

    // Configurar el transporter de nodemailer
    // Nota: Necesitarás configurar estas variables de entorno
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: false, // true para 465, false para otros puertos
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD, // Para Gmail, usa una "App Password"
      },
    })

    // Configurar el contenido del email
    const mailOptions = {
      from: process.env.SMTP_USER || mail,
      to: "Franco.L.Varela99@gmail.com",
      subject: `Nuevo contacto: ${nombreProyecto}`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${mail}</p>
        <p><strong>Nombre del proyecto:</strong> ${nombreProyecto}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${mensaje.replace(/\n/g, "<br>")}</p>
      `,
      text: `
        Nuevo mensaje de contacto
        
        Nombre: ${nombre}
        Email: ${mail}
        Nombre del proyecto: ${nombreProyecto}
        
        Mensaje:
        ${mensaje}
      `,
    }

    // Enviar el email
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: "Email enviado exitosamente" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error al enviar email:", error)
    return NextResponse.json(
      { error: "Error al enviar el email" },
      { status: 500 }
    )
  }
}

