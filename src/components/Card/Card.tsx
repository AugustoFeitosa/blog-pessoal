interface CardProps {
    titulo: string
    descricao: string
}

function Card({ titulo, descricao }: CardProps) {
    return (
        <div className="
            border-4 border-[#dc143c]
            m-8 p-8 flex flex-col justify-items-center items-center
            "
        >

            <h1>{titulo}</h1>
            <p>{descricao}</p>

            <img src="https://t.ctcdn.com.br/bS-8WBlDwKHlulGTLRaZaHRjXA4=/400x400/smart/filters:format(webp)/i654119.png" alt="" />
        </div>
    )
}

export default Card
