import React from 'react'

interface ErrorMessageProps {
    message?: string
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
    return (
        <div className="text-red-700 bg-red-100 border border-red-700 rounded px-4 py-3 my-4 text-center font-medium">
            {message ||
                'Ha ocurrido un error al obtener los datos de GitHub. Por favor, inténtalo de nuevo más tarde.'}
        </div>
    )
}

export default ErrorMessage
