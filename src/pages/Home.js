import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [userName, setUserName] = useState('');
    const navigate = useNavigate();

    const handleStart = () => {
        const name = userName.trim() || '게스트';
        navigate(`/test?name=${encodeURIComponent(name)}`);
    };

    // 현재 도메인 기준 공유 링크 설정
    const shareUrl = window.location.origin;

    return (
        <div
            className="w-full h-screen flex flex-col"
            style={{
                backgroundImage: 'url(/assets/backgrounds/home.png)',
                backgroundSize: '100%', // 또는 '100% 100%'
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            {/* 헤더바 - 고정 */}
            <div className="flex-shrink-0 h-11 flex items-center justify-center bg-white shadow z-10">
                <h1 className="text-black text-xl font-bold">dinoSchool</h1>
            </div>
            {/* 메인 이미지 */}
            <div className="w-full" style={{ position: 'relative', aspectRatio: '600/550' }}>
                <img
                    src="/assets/backgrounds/main1.png"
                    alt="메인 이미지"
                    className="w-full h-full object-contain"
                    style={{ display: 'block' }}
                />
            </div>
            {/* 메인 컨텐츠 */}
            <div className="flex-1 overflow-y-auto scrollbar-hide px-16 text-center">
                <div className="mt-8">
                    <input
                        className="w-full p-3 border-2 border-white bg-white bg-opacity-20 rounded-lg text-center text-lg text-white placeholder-white placeholder-opacity-70 backdrop-blur-sm"
                        placeholder="이름을 입력해주세요."
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleStart()}
                    />
                    <button
                        onClick={handleStart}
                        className="mt-4 w-full"
                    >
                        <img
                            src="/assets/button/시작.png"
                            alt="시작하기"
                            className="w-full h-auto hover:scale-105 transition-transform duration-200"
                        />
                    </button>
                </div>
                {/* 하단 공유 영역 */}
                <div className="mt-8 mb-8 text-center">
                    <p className="text-sm text-white text-opacity-70 mb-3">테스트 공유하기</p>
                    <div className="flex justify-center gap-4">
                        {/* 페이스북 공유 */}
                        <a
                            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.origin)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-14 h-14 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                            title="페이스북 공유"
                        >
                            <img src="/assets/button/Facebook.svg" alt="페이스북" width="64" height="64" />
                        </a>

                        {/* 인스타그램 이동 */}
                        <a
                            href="https://www.instagram.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-14 h-14 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                            style={{ backgroundColor: '#fff' }}
                            title="인스타그램"
                        >
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="2" y="2" width="20" height="20" rx="6" fill="#fff" />
                                <rect x="2" y="2" width="20" height="20" rx="6" stroke="#ff79c8" strokeWidth="2" />
                                <circle cx="12" cy="12" r="4.5" stroke="#ff79c8" strokeWidth="2" />
                                <circle cx="17.5" cy="6.5" r="1.5" fill="#ff79c8" />
                            </svg>
                        </a>

                        {/* X (트위터) 공유 */}
                        <a
                            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.origin)}&text=${encodeURIComponent('🐣 나와 닮은 공룡 친구 캡슐 뽑기 테스트!')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-14 h-14 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                            style={{ backgroundColor: '#ffffffff' }}
                            title="X 공유"
                        >
                            <img src="/assets/button/x.svg" alt="X" width="56" height="56" />

                        </a>

                        {/* 링크 복사 */}
                        <button
                            className="w-14 h-14 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                            style={{ backgroundColor: '#fff' }}
                            title="링크 복사"
                            onClick={() => {
                                navigator.clipboard.writeText(window.location.origin);
                                alert('📋 링크가 복사되었어요!');
                            }}
                        >
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.5 15.5L15.5 8.5" stroke="#ff79c8" strokeWidth="2" strokeLinecap="round" />
                                <rect x="3" y="11" width="8" height="8" rx="4" stroke="#ff79c8" strokeWidth="2" />
                                <rect x="13" y="3" width="8" height="8" rx="4" stroke="#ff79c8" strokeWidth="2" />
                            </svg>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;