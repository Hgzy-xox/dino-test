import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Test = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [scores, setScores] = useState({
        E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0
    });

    // URL에서 사용자 이름 가져오기
    const searchParams = new URLSearchParams(location.search);
    const userName = searchParams.get('name') || '게스트';

    // 공룡 캐릭터 MBTI 매칭
    const dinoCharacters = {
        'ISTJ': '티렉스',
        'ISFJ': '트리쉬',
        'INFJ': '벨로',
        'INTJ': '스피노',
        'ISTP': '에이브',
        'ISFP': '피오니',
        'INFP': '소냐',
        'INTP': '샤일로',
        'ESTP': '파키',
        'ESFP': '피터',
        'ENFP': '비키',
        'ENTP': '테리'
    };

    // 질문 데이터 (MBTI 유형별 3문제씩)
    const questions = [
        {
            id: 1,
            image: '/assets/backgrounds/1.png',
            options: [
                { id: 'A', image: '/assets/button/1-1.png', type: 'E' },
                { id: 'B', image: '/assets/button/1-2.png', type: 'I' }
            ]
        },
        {
            id: 2,
            image: '/assets/backgrounds/2.png',
            options: [
                { id: 'A', image: '/assets/button/2-1.png', type: 'E' },
                { id: 'B', image: '/assets/button/2-2.png', type: 'I' }
            ]
        },
        {
            id: 3,
            image: '/assets/backgrounds/3.png',
            options: [
                { id: 'A', image: '/assets/button/3-1.png', type: 'E' },
                { id: 'B', image: '/assets/button/3-2.png', type: 'I' }
            ]
        },
        {
            id: 4,
            image: '/assets/backgrounds/4.png',
            options: [
                { id: 'A', image: '/assets/button/4-1.png', type: 'S' },
                { id: 'B', image: '/assets/button/4-2.png', type: 'N' }
            ]
        },
        {
            id: 5,
            image: '/assets/backgrounds/5.png',
            options: [
                { id: 'A', image: '/assets/button/5-1.png', type: 'S' },
                { id: 'B', image: '/assets/button/5-2.png', type: 'N' }
            ]
        },
        {
            id: 6,
            image: '/assets/backgrounds/6.png',
            options: [
                { id: 'A', image: '/assets/button/6-1.png', type: 'S' },
                { id: 'B', image: '/assets/button/6-2.png', type: 'N' }
            ]
        },
        {
            id: 7,
            image: '/assets/backgrounds/7.png',
            options: [
                { id: 'A', image: '/assets/button/7-1.png', type: 'T' },
                { id: 'B', image: '/assets/button/7-2.png', type: 'F' }
            ]
        },
        {
            id: 8,
            image: '/assets/backgrounds/8.png',
            options: [
                { id: 'A', image: '/assets/button/8-1.png', type: 'T' },
                { id: 'B', image: '/assets/button/8-2.png', type: 'F' }
            ]
        },
        {
            id: 9,
            image: '/assets/backgrounds/9.png',
            options: [
                { id: 'A', image: '/assets/button/9-1.png', type: 'T' },
                { id: 'B', image: '/assets/button/9-2.png', type: 'F' }
            ]
        },
        {
            id: 10,
            image: '/assets/backgrounds/10.png',
            options: [
                { id: 'A', image: '/assets/button/10-1.png', type: 'J' },
                { id: 'B', image: '/assets/button/10-2.png', type: 'P' }
            ]
        },
        {
            id: 11,
            image: '/assets/backgrounds/11.png',
            options: [
                { id: 'A', image: '/assets/button/11-1.png', type: 'J' },
                { id: 'B', image: '/assets/button/11-2.png', type: 'P' }
            ]
        },
        {
            id: 12,
            image: '/assets/backgrounds/12.png',
            options: [
                { id: 'A', image: '/assets/button/12-1.png', type: 'J' },
                { id: 'B', image: '/assets/button/12-2.png', type: 'P' }
            ]
        }
    ];

    // 답변 선택 처리
    const handleAnswer = (option) => {
        setScores(prev => {
            const updated = {
                ...prev,
                [option.type]: prev[option.type] + 1
            };

            // 마지막 문제 답변 후 MBTI 계산
            if (currentQuestion === questions.length - 1) {
                const mbtiType = [
                    updated.E > updated.I ? 'E' : 'I',
                    updated.S > updated.N ? 'S' : 'N',
                    updated.T > updated.F ? 'T' : 'F',
                    updated.J > updated.P ? 'J' : 'P'
                ].join('');

                // 결과 페이지로 이동
                navigate('/result', {
                    state: {
                        mbtiType,
                        character: dinoCharacters[mbtiType],
                        userName
                    }
                });
            } else {
                setCurrentQuestion(currentQuestion + 1);
            }
            return updated;
        });
    };

    // 이전 질문으로 이동
    const handleBack = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        } else {
            navigate('/');
        }
    };

    return (
        <div className="w-full h-screen flex flex-col">
            {/* 헤더바 - 고정 */}
            <div className="flex-shrink-0 h-11 flex items-center justify-center bg-white shadow-md z-10">
                <button
                    onClick={handleBack}
                    className="absolute left-4 text-gray-600"
                >
                    ←
                </button>
                <h1 className="text-black text-xl font-bold">dinoSchool</h1>
            </div>

            {/* 진행 상태 바 */}
            <div className="px-6 pt-2 bg-white">
                <div className="w-full h-2 bg-gray-200 rounded-full">
                    <div
                        className="h-2 bg-[#ff79c8] rounded-full transition-all duration-300"
                        style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                    />
                </div>
                <div className="text-right text-sm text-gray-500 mt-1">
                    {currentQuestion + 1} / {questions.length}
                </div>
            </div>

            {/* 배경 이미지와 선택지 */}
            <div className="flex-1 relative overflow-hidden bg-pink-50">

                <div className="absolute inset-0 flex items-center justify-center">
                    <img
                        src={questions[currentQuestion].image}
                        alt={`질문 ${currentQuestion + 1}`}
                        className="h-full w-auto max-w-full object-cover"
                    />
                </div>

                {/* 선택지 버튼 */}
                <div className="absolute inset-x-0 bottom-[15%] px-6">
                    <div className="space-y-4">
                        {questions[currentQuestion].options.map((option) => (
                            <button
                                key={option.id}
                                onClick={() => handleAnswer(option)}
                                className="w-full transform hover:scale-105 transition-transform duration-200 active:scale-95"
                            >
                                <img
                                    src={option.image}
                                    alt={`선택지 ${option.id}`}
                                    className="w-full h-auto rounded-xl shadow-lg"
                                    draggable="false"
                                />
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Test;