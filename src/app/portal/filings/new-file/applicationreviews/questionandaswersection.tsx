import React from "react"

const QuestionAnswerSection = ({ question, answer = "...", className }: { question: string, answer: any, className?: string }) => {
    return <nav className={`flex flex-col gap-4 ${className}`}>
        <nav className='text-sm text-gray-500 font-medium'>
            {question}

        </nav>
        <span className=' text-gray-400 font-medium text-sm'>
            {answer}
        </span>
    </nav>
}

export default QuestionAnswerSection