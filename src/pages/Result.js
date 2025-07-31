import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Result = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { mbtiType, character, userName } = location.state || {};
    const [isImageLoaded, setIsImageLoaded] = React.useState(false);

    // 캐릭터 결과 데이터
    const characterResults = {
        'ISTJ': {
            name: "피터",
            nickname: "모범생 전교1등",
            description: "계획적이고 성실한 당신은 반의 모범생 피터와 똑 닮았어요! 맡은 일은 책임감을 갖고 끝까지 해내는 믿음직한 친구군요.",
            images: ["/assets/characters/피터 (1).jpg", "/assets/characters/피터 (2).jpg"]
        },
        'ISFJ': {
            name: "트리쉬",
            nickname: "무한긍정 꽃향기",
            description: "주변 사람들을 챙기는 것을 좋아하고 무한한 긍정 에너지를 가진 당신은 트리쉬와 닮았어요. 꽃향기처럼 기분 좋은 친절함을 나눠주는군요.",
            images: ["/assets/characters/트리쉬 (1).jpg", "/assets/characters/트리쉬 (2).jpg"]
        },
        'INFJ': {
            name: "벨로",
            nickname: "섬세한 예술가 공룡",
            description: "감각에 민감하고 상상력이 풍부한 당신은 벨로와 닮았어요. 겁이 많지만 따뜻한 마음과 예술적 재능을 가진 아이입니다.",
            images: ["/assets/characters/벨로 (1).jpg", "/assets/characters/벨로 (2).jpg"]
        },
        'INTJ': {
            name: "스피노",
            nickname: "정의의 확성기",
            description: "자신만의 신념과 정의감이 뚜렷한 당신은 스피노와 닮았어요. 조용해 보이지만, 중요하다고 생각하는 일에는 누구보다 강한 목소리를 낸답니다.",
            images: ["/assets/characters/스피노 (1).jpg", "/assets/characters/스피노 (2).jpg"]
        },
        'ISTP': {
            name: "에이브",
            nickname: "공룡을 동경한 외계인",
            description: "독창적이고 논리적인 당신은 에이브를 닮았어요. 조용히 세상을 관찰하며 자신만의 독특한 세계관을 만들어가는 사색가군요.",
            images: ["/assets/characters/에이브 (1).jpg", "/assets/characters/에이브 (2).jpg"]
        },
        'ISFP': {
            name: "피오니",
            nickname: "호기심 많은 탐험가",
            description: "미스테리한 현상과 새로운 모험을 사랑하는 당신은 탐험가 피오니를 닮았어요. 다른 사람들에게 영감을 주며 함께 나아가는 것을 좋아해요.",
            images: ["/assets/characters/피오니 (1).jpg", "/assets/characters/피오니 (2).jpg"]
        },
        'INFP': {
            name: "소냐",
            nickname: "열정의 태권도 소녀",
            description: "규칙을 중시하고 팀을 이끄는 데 재능이 있는 당신은 열정적인 태권도 소녀 소냐와 닮았어요. 뛰어난 리더십으로 친구들을 이끄는군요!",
            images: ["/assets/characters/소냐 (1).jpg", "/assets/characters/소냐 (2).jpg"]
        },
        'INTP': {
            name: "샤일로",
            nickname: "반짝이는 공주님",
            description: "화려하고 아름다운 것을 좋아하는 당신은 모두의 주목을 받는 샤일로와 닮았어요. 긍정적인 에너지로 주변을 환하게 만드는 매력의 소유자예요.",
            images: ["/assets/characters/샤일로 (1).jpg", "/assets/characters/샤일로 (2).jpg"]
        },
        'ESTP': {
            name: "파키",
            nickname: "과묵한 순정남",
            description: "말수는 적지만 마음속에 따뜻한 순정을 품고 있는 당신은 파키와 닮았어요. 겉으로는 무관심해 보여도, 조용히 주변을 챙기는 다정한 타입이에요.",
            images: ["/assets/characters/파키 (1).jpg", "/assets/characters/파키 (2).jpg"]
        },
        'ESFP': {
            name: "피터",
            nickname: "모범생 전교1등",
            description: "계획적이고 성실한 당신은 반의 모범생 피터와 똑 닮았어요! 맡은 일은 책임감을 갖고 끝까지 해내는 믿음직한 친구군요.",
            images: ["/assets/characters/피터 (1).jpg", "/assets/characters/피터 (2).jpg"]
        },
        'ENFP': {
            name: "비키",
            nickname: "착한 먹보",
            description: "마음이 따뜻하고 착한 당신은 친구들의 이야기를 잘 들어주는 비키와 닮았어요. 때로는 생각에 잠겨 조용하지만, 다정한 마음을 가졌군요!",
            images: ["/assets/characters/비키 (1).jpg", "/assets/characters/비키 (2).jpg"]
        },
        'ENTP': {
            name: "테리",
            nickname: "장난꾸러기 게이머",
            description: "새로운 아이디어와 장난으로 주변을 즐겁게 만드는 당신은 테리와 닮았어요. 재치 있는 토론과 게임을 즐기는 활기찬 친구로군요!",
            images: ["/assets/characters/테리 (1).jpg", "/assets/characters/테리 (2).jpg"]
        }
    };

    const resultData = characterResults[mbtiType];

    // 배경 이미지 프리로드
    React.useEffect(() => {
        if (resultData) {
            const img = new Image();
            img.src = `/assets/characters/${resultData.name} (2).jpg`;

            // 이미지 요청 헤더 설정
            fetch(`/assets/characters/${resultData.name} (2).jpg`, {
                headers: {
                    'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
                    'Cache-Control': 'public, max-age=0',
                },
                cache: 'no-cache'
            }).then(() => {
                setIsImageLoaded(true);
            });
        }
    }, [resultData]);

    // 결과 데이터가 없는 경우 처리
    if (!resultData) {
        return (
            <div className="min-h-screen bg-gray-100 flex justify-center">
                <div className="w-full max-w-md p-6 text-center">
                    <h2 className="text-xl font-bold text-gray-700 mb-4">결과를 찾을 수 없습니다.</h2>
                    <button
                        onClick={() => navigate('/')}
                        className="bg-[#ff79c8] text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-opacity-90 transition"
                    >
                        다시 테스트하기
                    </button>
                </div>
            </div>
        );
    }

    // 공유 URL 생성
    const shareUrl = window.location.origin;
    const shareText = `${userName}님의 공룡 캐릭터는 ${resultData.name}입니다!`;

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center overflow-y-auto">
            <div
                className="relative w-full max-w-[414px] min-h-screen bg-white"
                style={{
                    backgroundImage: `url('/assets/characters/${resultData.name} (2).jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundAttachment: 'fixed'
                }}
            >
                {/* 배경 오버레이 */}
                <div className="absolute inset-0 bg-black/20"></div>
                {/* 컨텐츠 */}
                <div className="relative z-10 p-6 flex flex-col items-center">
                    {/* 헤더 */}
                    <div className="w-full flex items-center justify-between mb-8">
                        <button
                            onClick={() => navigate('/')}
                            className="text-white text-2xl"
                        >
                            ←
                        </button>
                        <h1 className="text-white text-xl font-bold">dinoSchool</h1>
                        <div className="w-8"></div>
                    </div>

                    {/* 상단 타이틀 */}
                    <div className="w-full text-center mb-4 mt-2">
                        <span className="text-xl sm:text-2xl font-bold text-[#ff79c8] tracking-tight bg-white/80 rounded-full px-4 py-2 inline-block">
                            {userName}님의 친구는...
                        </span>
                    </div>

                    {/* 캐릭터 이미지 */}
                    <div className="w-full max-w-[320px] mx-auto flex items-center justify-center mb-4">
                        <img
                            src={resultData.images[0]}
                            alt={resultData.name}
                            className="object-contain w-full h-full"
                            loading="eager"
                            draggable="false"
                        />
                    </div>

                    {/* MBTI/이름/별명 */}
                    <div className="text-center mb-2">
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mb-1">{resultData.name}</h3>
                        <div className="text-base sm:text-lg font-bold text-[#ff79c8]">{mbtiType} <span className="text-gray-500 font-medium">| {resultData.nickname}</span></div>
                    </div>

                    {/* 소개문구 */}
                    <div className="w-full max-w-md mx-auto bg-white/80 rounded-2xl py-4 px-5 mt-2 mb-6">
                        <p className="text-gray-800 text-center whitespace-pre-line leading-snug text-base sm:text-lg font-medium">
                            {resultData.description}
                        </p>
                    </div>

                    {/* 공유 버튼 */}
                    <div className="flex justify-center gap-4 mb-6">
                        <button
                            onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`, '_blank')}
                            className="w-12 h-12 rounded-full bg-[#ff79c8] flex items-center justify-center text-white hover:scale-105 transition"
                        >
                            <img src="/assets/button/Facebook.svg" alt="Facebook" className="w-6 h-6" />
                        </button>
                        <button
                            onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`, '_blank')}
                            className="w-12 h-12 rounded-full bg-[#ff79c8] flex items-center justify-center text-white hover:scale-105 transition"
                        >
                            <img src="/assets/button/X.svg" alt="X" className="w-6 h-6" />
                        </button>
                        <button
                            onClick={() => {
                                navigator.clipboard.writeText(window.location.href);
                                alert('링크가 복사되었습니다!');
                            }}
                            className="w-12 h-12 rounded-full bg-[#ff79c8] flex items-center justify-center text-white hover:scale-105 transition"
                        >
                            🔗
                        </button>
                    </div>

                    {/* 다시하기 버튼 */}
                    <button
                        onClick={() => navigate('/')}
                        className="w-full max-w-xs mx-auto bg-[#ff79c8] text-white font-bold py-3 px-6 rounded-full hover:bg-opacity-90 transition text-lg"
                    >
                        다시하기
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Result;