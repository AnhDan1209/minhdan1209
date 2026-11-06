// --- 0. LOGIC THEME ENGINE ---
        const themeBtns = document.querySelectorAll('[data-set-theme]');
        themeBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const themeName = btn.getAttribute('data-set-theme');
                document.documentElement.setAttribute('data-theme', themeName);
                themeBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });

        // --- 1. LOGIC RENDER TROPHIES ---
       const trophies = [
            { id: 1, title: "Quả Bóng Vàng (Ballon d'Or)", count: "5×", category: "individual", categoryName: "Cá nhân", year: "2008, 2013, 2014, 2016, 2017", img: "image/trophy_ballondor.jpg" },
            { id: 2, title: "UEFA Champions League", count: "5×", category: "club", categoryName: "Câu lạc bộ", year: "2008 (Manchester United), 2014, 2016, 2017, 2018", img: "image/trophy_c1.jpg" },
            { id: 3, title: "FIFA Puskás Award", count: "1×", category: "individual", categoryName: "Cá nhân", year: "2009 (Bàn thắng đẹp nhất năm)", img: "image/puskas.jpg" },
            { id: 4, title: "Giải Vô Địch Châu Âu (EURO)", count: "1×", category: "international", categoryName: "Đội tuyển quốc gia", year: "2016 (Bồ Đào Nha)", img: "image/trophy_euro.jpg" },
            { id: 5, title: "Chiếc Giày Vàng Châu Âu", count: "4×", category: "individual", categoryName: "Cá nhân", year: "2008, 2011, 2014, 2015", img: "image/trophy_giayvang.jpg" },
            { id: 6, title: "FIFA Club World Cup", count: "4×", category: "club", categoryName: "Câu lạc bộ", year: "2008 (Manchester United), 2014, 2016, 2017 (Real Madrid)", img: "image/trophy_cwc.jpg" },
            { id: 7, title: "UEFA Nations League", count: "2×", category: "international", categoryName: "Đội tuyển quốc gia", year: "2019, 2025 (Bồ Đào Nha)", img: "image/trophy_nationsleague.jpg" },
            { id: 8, title: "Ngoại Hạng Anh (Premier League)", count: "3×", category: "club", categoryName: "Câu lạc bộ", year: "2007, 2008, 2009", img: "image/trophy_epl.jpg" },
            { id: 9, title: "La Liga (Tây Ban Nha)", count: "2×", category: "club", categoryName: "Câu lạc bộ", year: "2012, 2017", img: "image/trophy_laliga.jpg" },
            { id: 10, title: "FA Cup", count: "1×", category: "club", categoryName: "Câu lạc bộ", year: "2004 (Manchester United)", img: "image/trophy_fa-cup.jpg" },
            { id: 11, title: "League Cup (EFL Cup)", count: "2×", category: "club", categoryName: "Câu lạc bộ", year: "2006, 2009 (Manchester United)", img: "image/trophy_league-cup.jpg" },
            { id: 12, title: "FA Community Shield", count: "2×", category: "club", categoryName: "Câu lạc bộ", year: "2007, 2008 (Manchester United)", img: "image/trophy_community-shield.jpg" },
            { id: 13, title: "Copa del Rey", count: "2×", category: "club", categoryName: "Câu lạc bộ", year: "2011, 2014 (Real Madrid)", img: "image/trophy_copa-del-rey.jpg" },
            { id: 14, title: "Siêu cúp Tây Ban Nha", count: "2×", category: "club", categoryName: "Câu lạc bộ", year: "2012, 2017 (Real Madrid)", img: "image/trophy-supercopa-espana.jpg" },
            { id: 15, title: "Siêu cúp UEFA", count: "3×", category: "club", categoryName: "Câu lạc bộ", year: "2014, 2016, 2017 (Real Madrid)", img: "image/trophy-uefa-super-cup.jpg" },
            { id: 16, title: "Serie A (Ý)", count: "2×", category: "club", categoryName: "Câu lạc bộ", year: "2019, 2020 (Juventus)", img: "image/trophy-serie-a.jpg" },
            { id: 17, title: "Coppa Italia", count: "1×", category: "club", categoryName: "Câu lạc bộ", year: "2021 (Juventus)", img: "image/trophy-coppa-italia.jpg" },
            { id: 18, title: "Siêu cúp Ý", count: "2×", category: "club", categoryName: "Câu lạc bộ", year: "2018, 2020 (Juventus)", img: "image/trophy-supercoppa-italiana.jpg" },
            { id: 19, title: "Arab Club Champions Cup", count: "1×", category: "club", categoryName: "Câu lạc bộ", year: "2023 (Al Nassr)", img: "image/trophy-arab-club-champions.jpg" },
            { id: 20, title: "The Best FIFA Men's Player", count: "2×", category: "individual", categoryName: "Cá nhân", year: "2016, 2017", img: "image/trophy-the-best-fifa.jpg" },
            { id: 21, title: "Cầu thủ nam xuất sắc nhất UEFA", count: "3×", category: "individual", categoryName: "Cá nhân", year: "2014, 2016, 2017", img: "image/trophy-uefa-player-of-year.jpg" },
            { id: 22, title: "FIFA World Player of the Year", count: "1×", category: "individual", categoryName: "Cá nhân", year: "2008", img: "image/trophy-fifa-world-player.jpg" }
        ];
        function renderTrophies(filter = 'all') {
            const container = document.getElementById('trophy-container');
            if (!container) return;
            container.innerHTML = '';
            
            const filtered = filter === 'all' ? trophies : trophies.filter(t => t.category === filter);
            
            filtered.forEach(t => {
                const card = document.createElement('div');
                card.className = "bg-tCard border border-tBorder hover:border-tAccent rounded-2xl overflow-hidden flex flex-row transition-all transform hover:-translate-y-1.5 group shadow-lg";
                card.innerHTML = `
                    <div class="relative w-2/5 h-44 flex-shrink-0 overflow-hidden bg-tBg">
                        <img src="${t.img}" alt="${t.title}" onerror="this.src='image/cr7.jpg'" class="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500">
                        <div class="absolute inset-0 bg-gradient-to-r from-transparent via-tCard/20 to-tCard"></div>
                    </div>
                    <div class="p-3.5 flex-1 flex flex-col justify-between min-w-0">
                        <div>
                            <h4 class="font-bold text-tText text-sm leading-snug mb-1 line-clamp-2">${t.title}</h4>
                            <p class="text-[11px] text-tMuted leading-tight line-clamp-2 font-medium">${t.year}</p>
                        </div>
                        <div class="pt-2 border-t border-tBorder flex justify-between items-center gap-1">
                            <span class="text-[9px] uppercase font-extrabold text-tAccent bg-tBg px-2 py-0.5 rounded-md border border-tBorder whitespace-nowrap">${t.categoryName}</span>
                            <span class="font-display text-xl font-black text-tAccent bg-tBg px-2 py-0.5 rounded-lg border border-tBorder whitespace-nowrap">${t.count}</span>
                        </div>
                    </div>
                `;
                container.appendChild(card);
            });
        }

        const filterContainer = document.getElementById('trophy-filters');
        if (filterContainer) {
            filterContainer.addEventListener('click', (e) => {
                if (e.target.tagName === 'BUTTON') {
                    document.querySelectorAll('#trophy-filters button').forEach(btn => {
                        btn.className = "px-4 py-2 rounded-xl text-xs font-bold bg-tCard text-tText border border-tBorder hover:border-tAccent transition-all uppercase tracking-wider";
                    });
                    e.target.className = "px-4 py-2 rounded-xl text-xs font-extrabold theme-gradient-bg shadow-md transition-all uppercase tracking-wider";
                    renderTrophies(e.target.dataset.filter);
                }
            });
        }

        // --- 2. LOGIC ÂM THANH SIUUU ---
        const siuuuAudio = new Audio('sound/siuuu.mp3');

        function playSiuuuSound() {
            siuuuAudio.currentTime = 0;
            siuuuAudio.play().catch(e => console.log("Lỗi phát âm thanh:", e));
            drawVisualizerWave();
        }

        function drawVisualizerWave() {
            const canvas = document.getElementById('audio-canvas');
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            let frame = 0;
            
            function animateCanvas() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.fillStyle = 'var(--c-accent)';
                
                for(let i = 0; i < 20; i++) {
                    const h = Math.sin(frame * 0.2 + i) * 15 + 20;
                    ctx.fillRect(i * 15, (canvas.height - h)/2, 8, h);
                }
                
                frame++;
                if(frame < 35) requestAnimationFrame(animateCanvas);
                else ctx.clearRect(0, 0, canvas.width, canvas.height);
            }
            animateCanvas();
        }

        const siuuuBtn = document.getElementById('siuuu-btn');
        const shockwaveTarget = document.getElementById('shockwave-target');

        if (siuuuBtn) {
            siuuuBtn.addEventListener('click', () => {
                playSiuuuSound();

                const wave = document.createElement('div');
                wave.className = 'absolute inset-0 rounded-full border-4 border-tAccent animate-shockwave';
                if (shockwaveTarget) shockwaveTarget.appendChild(wave);

                setTimeout(() => wave.remove(), 800);
            });
        }

        // --- 3. LOGIC MULTI-TRACK AUDIO PLAYER ---
        const playlist = [
            { title: "C1 Anthem", src: "sound/c1_anthem.mp3" },
            { title: "The Nights - Avicii", src: "sound/the_nights.mp3" },
            { title: "Hall of Fame", src: "sound/hall_of_fame.mp3" }
        ];

        let currentTrackIndex = 0;
        const bgAudio = document.getElementById('bg-audio');
        const bgMusicBtn = document.getElementById('bg-music-btn');
        const bgMusicIcon = document.getElementById('bg-music-icon');
        const nextTrackBtn = document.getElementById('next-track-btn');
        const trackTitle = document.getElementById('track-title');
        const trackNumber = document.getElementById('track-number');

        function loadTrack(index) {
            if (!bgAudio) return;
            bgAudio.src = playlist[index].src;
            if (trackTitle) trackTitle.innerText = playlist[index].title;
            if (trackNumber) trackNumber.innerText = `${index + 1}/${playlist.length}`;
        }

        if (bgMusicBtn && bgAudio) {
            bgAudio.volume = 0.35;
            loadTrack(currentTrackIndex);

            bgMusicBtn.addEventListener('click', () => {
                if (bgAudio.paused) {
                    bgAudio.play().then(() => {
                        bgMusicIcon.className = 'fa-solid fa-pause text-sm';
                    }).catch(e => console.log("Thao tác người dùng yêu cầu để phát nhạc:", e));
                } else {
                    bgAudio.pause();
                    bgMusicIcon.className = 'fa-solid fa-play text-sm ml-0.5';
                }
            });

            if (nextTrackBtn) {
                nextTrackBtn.addEventListener('click', () => {
                    currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
                    loadTrack(currentTrackIndex);
                    bgAudio.play().then(() => {
                        bgMusicIcon.className = 'fa-solid fa-pause text-sm';
                    });
                });
            }

            bgAudio.addEventListener('ended', () => {
                currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
                loadTrack(currentTrackIndex);
                bgAudio.play();
            });
        }

        // --- 4. DATABASE CÂU HỎI TRẮC NGHIỆM ---
        const masterQuizData = [
            // 1 - 10: Khởi đầu & Tuổi thơ
            { question: "Cristiano Ronaldo sinh ngày tháng năm nào?", options: ["05/02/1985", "05/02/1987", "05/02/1983", "05/02/1989"], correct: 0 },
            { question: "Cristiano Ronaldo sinh ra ở hòn đảo nào của Bồ Đào Nha?", options: ["Azores", "Madeira (Funchal)", "Porto Santo", "Berlengas"], correct: 1 },
            { question: "Tên đầy đủ của Cristiano Ronaldo là gì?", options: ["Cristiano Ronaldo dos Santos", "Cristiano Ronaldo dos Santos Aveiro", "Cristiano Ronaldo da Silva", "Cristiano Ronaldo Ribeiro"], correct: 1 },
            { question: "Ronaldo là con thứ mấy trong gia đình?", options: ["Thứ hai", "Thứ ba", "Út (thứ tư)", "Con một"], correct: 2 },
            { question: "Tên mẹ đẻ của Cristiano Ronaldo là gì?", options: ["Maria Dolores dos Santos Viveiros da Aveiro", "Ana Maria", "Maria Rosa", "Elma Aveiro"], correct: 0 },
            { question: "Đội bóng thời thơ ấu đầu tiên mà Ronaldo từng thi đấu là gì?", options: ["Andorinha", "Nacional", "Sporting CP", "Maritimo"], correct: 0 },
            { question: "Năm 15 tuổi, Ronaldo từng đối mặt với nguy cơ phải giải nghệ sớm vì bệnh gì?", options: ["Bệnh sốt rét", "Bệnh tim (nhịp tim đập nhanh bất thường)", "Chấn thương đầu gối nặng", "Bệnh hen suyễn"], correct: 1 },
            { question: "Cậu bé nào là bạn thân thời thơ ở Madeira đã nhường cơ hội thi tuyển vào Sporting CP cho Ronaldo?", options: ["Albert Fantrau", "Nani", "Ricardo Quaresma", "Miguel Paixao"], correct: 0 },
            { question: "Ronaldo gia nhập học viện trẻ của Sporting CP vào năm bao nhiêu tuổi?", options: ["10 tuổi", "12 tuổi", "14 tuổi", "16 tuổi"], correct: 1 },
            { question: "Ronaldo có trận ra mắt đội một Sporting CP vào năm nào?", options: ["2001", "2002", "2003", "2004"], correct: 1 },

            // 11 - 25: Sự nghiệp tại Sporting CP & Man Utd (Lần 1)
            { question: "Trận đấu giao hữu định mệnh năm 2003 khiến Sir Alex Ferguson quyết định mua Ronaldo diễn ra giữa Man Utd và câu lạc bộ nào?", options: ["Porto", "Sporting CP", "Benfica", "Real Madrid"], correct: 1 },
            { question: "Mức phí chuyển nhượng đưa Ronaldo từ Sporting CP sang Man Utd năm 2003 là khoảng bao nhiêu?", options: ["12.24 triệu bảng", "15 triệu bảng", "18.5 triệu bảng", "22 triệu bảng"], correct: 0 },
            { question: "Khi mới đến Man Utd, Ronaldo ban đầu muốn mặc số áo nào nhưng Sir Alex yêu cầu lấy số 7?", options: ["Số 9", "Số 28", "Số 17", "Số 10"], correct: 1 },
            { question: "Ronaldo có trận ra mắt Ngoại hạng Anh cho Man Utd đối đầu với đội bóng nào?", options: ["Bolton Wanderers", "Arsenal", "Chelsea", "Liverpool"], correct: 0 },
            { question: "Ronaldo ghi bàn thắng đầu tiên cho Man Utd từ tình huống nào?", options: ["Đánh đầu cận thành", "Sút phạt trực tiếp", "Đệm bóng cận thành", "Penalty"], correct: 1 },
            { question: "Ronaldo giành danh hiệu Cầu thủ trẻ xuất sắc nhất năm của PFA vào mùa giải nào?", options: ["2005/06", "2006/07", "2007/08", "2003/04"], correct: 1 },
            { question: "Mùa giải 2007/08, Ronaldo ghi tổng cộng bao nhiêu bàn thắng trên mọi đấu trường cho Man Utd?", options: ["35 bàn", "42 bàn", "48 bàn", "51 bàn"], correct: 1 },
            { question: "Ronaldo giành Quả bóng vàng đầu tiên trong sự nghiệp vào năm nào?", options: ["2007", "2008", "2009", "2010"], correct: 1 },
            { question: "Ronaldo cùng Man Utd vô địch Champions League đầu tiên vào năm nào?", options: ["2006", "2007", "2008", "2009"], correct: 2 },
            { question: "Đội bóng nào bị Man Utd đánh bại trong trận chung kết Champions League 2008?", options: ["Chelsea", "Barcelona", "Bayern Munich", "AC Milan"], correct: 0 },
            { question: "Ronaldo giành giải thưởng nào của FIFA sau màn trình diễn siêu hạng năm 2008?", options: ["Cầu thủ xuất sắc nhất năm của FIFA (FIFA World Player)", "The Best", "Cầu thủ trẻ xuất sắc nhất", "Quả bóng vàng FIFA"], correct: 0 },
            { question: "Bàn thắng nào của Ronaldo tại Champions League vào lưới Porto năm 2009 đã giành giải Puskas?", options: ["Cú đánh đầu sấm sét", "Cú sút xa cự ly hơn 36 mét", "Pha lốp bóng tinh tế", "Cú đá phạt góc thành bàn"], correct: 1 },
            { question: "Ronaldo ghi bao nhiêu bàn thắng trong màu áo Man Utd ở giai đoạn đầu tiên (2003-2009)?", options: ["98 bàn", "105 bàn", "118 bàn", "125 bàn"], correct: 2 },
            { question: "Số danh hiệu Ngoại hạng Anh (Premier League) Ronaldo đạt được ở giai đoạn 1 với Man Utd là mấy?", options: ["2", "3", "4", "5"], correct: 1 },
            { question: "Trận chung kết Champions League cuối cùng của Ronaldo trong màu áo Man Utd (giai đoạn 1) là năm nào?", options: ["2008", "2009", "2010", "2011"], correct: 1 },

            // 26 - 50: Kỷ nguyên rực rỡ tại Real Madrid
            { question: "Ronaldo chính thức gia nhập Real Madrid vào năm nào?", options: ["2008", "2009", "2010", "2011"], correct: 1 },
            { question: "Mức phí chuyển nhượng kỷ lục thế giới khi Ronaldo sang Real Madrid năm 2009 là bao nhiêu?", options: ["80 triệu bảng", "90 triệu bảng", "94 triệu euro (80 triệu bảng)", "100 triệu euro"], correct: 2 },
            { question: "Buổi lễ ra mắt của Ronaldo tại sân Santiago Bernabeu thu hút bao nhiêu khán giả đến sân?", options: ["Khoảng 50.000 người", "Khoảng 60.000 người", "Khoảng 80.000 người", "Hơn 90.000 người"], correct: 3 },
            { question: "Mùa giải đầu tiên tại Real Madrid (2009/10), do Raul Gonzalez đang mặc áo số 7, Ronaldo mang áo số mấy?", options: ["Số 9", "Số 11", "Số 17", "Số 19"], correct: 0 },
            { question: "Ronaldo ghi tổng cộng bao nhiêu bàn thắng trong lịch sử thi đấu cho Real Madrid?", options: ["438 bàn", "450 bàn", "465 bàn", "500 bàn"], correct: 1 },
            { question: "Ronaldo mất bao nhiêu trận để đạt mốc 450 bàn thắng cho Real Madrid?", options: ["412 trận", "438 trận", "450 trận", "460 trận"], correct: 1 },
            { question: "Ronaldo giành tổng cộng bao nhiêu danh hiệu Champions League cùng Real Madrid?", options: ["2", "3", "4", "5"], correct: 2 },
            { question: "Real Madrid dưới sự dẫn dắt của Ronaldo đã lập kỷ lục vô địch Champions League mấy lần liên tiếp?", options: ["2 lần", "3 lần", "4 lần", "Không có"], correct: 1 },
            { question: "Ronaldo giành bao nhiêu Quả bóng vàng trong thời gian khoác áo Real Madrid?", options: ["2", "3", "4", "5"], correct: 1 },
            { question: "Mùa giải Champions League nào Ronaldo ghi kỷ lục 17 bàn thắng trong một mùa giải?", options: ["2011/12", "2013/14", "2015/16", "2016/17"], correct: 1 },
            { question: "Ronaldo là chân sút vĩ đại nhất lịch sử tại đấu trường nào?", options: ["La Liga", "UEFA Champions League", "Cúp Nhà vua Tây Ban Nha", "FIFA Club World Cup"], correct: 1 },
            { question: "Đội bóng nào là đối thủ mà Ronaldo chọc thủng lưới nhiều nhất trong sự nghiệp?", options: ["Barcelona", "Sevilla", "Atletico Madrid", "Getafe"], correct: 1 },
            { question: "Ronaldo ghi bao nhiêu bàn thắng tại El Clasico (trận đấu giữa Real Madrid và Barcelona)?", options: ["15 bàn", "18 bàn", "20 bàn", "22 bàn"], correct: 1 },
            { question: "Bàn thắng bằng đầu huyền thoại giúp Real Madrid đánh bại Barcelona ở chung kết Cúp Nhà vua 2011 diễn ra ở sân nào?", options: ["Camp Nou", "Mestalla", "Santiago Bernabeu", "Wanda Metropolitano"], correct: 1 },
            { question: "Pha 'xe đạp chổng ngược' tuyệt đỉnh của Ronaldo vào lưới Juventus ở tứ kết Cúp C1 diễn ra năm nào?", options: ["2016", "2017", "2018", "2019"], correct: 2 },
            { question: "Sau cú 'xe đạp chổng ngược' vào lưới Juventus, Ronaldo nhận được phản ứng gì từ cổ động viên đội chủ nhà?", options: ["La ó phản đối", "Bỏ về sân", "Đứng dậy vỗ tay tán thưởng", "Ném vật thể lạ"], correct: 2 },
            { question: "Ronaldo giành bao nhiêu danh hiệu Vua phá lưới La Liga (Pichichi) cùng Real Madrid?", options: ["2", "3", "4", "5"], correct: 1 },
            { question: "Mùa giải La Liga 2014/15, Ronaldo ghi được bao nhiêu bàn thắng ở giải VĐQG?", options: ["40 bàn", "42 bàn", "48 bàn", "50 bàn"], correct: 2 },
            { question: "Ronaldo cùng Real Madrid vô địch La Liga tổng cộng mấy lần?", options: ["1 lần", "2 lần", "3 lần", "4 lần"], correct: 1 },
            { question: "Ai là huấn luyện viên đã đưa Ronaldo về Real Madrid vào năm 2009?", options: ["Jose Mourinho", "Manuel Pellegrini", "Zinedine Zidane", "Carlo Ancelotti"], correct: 1 },
            { question: "Ronaldo chính thức chia tay Real Madrid để chuyển sang Juventus vào mùa hè năm nào?", options: ["2017", "2018", "2019", "2020"], correct: 1 },
            { question: "Tổng số danh hiệu lớn nhỏ Ronaldo giành được trong 9 năm khoác áo Real Madrid là bao nhiêu?", options: ["12 danh hiệu", "14 danh hiệu", "16 danh hiệu", "18 danh hiệu"], correct: 2 },
            { question: "Ronaldo ghi bao nhiêu cú hat-trick trong màu áo Real Madrid?", options: ["34 hat-trick", "40 hat-trick", "44 hat-trick", "48 hat-trick"], correct: 2 },
            { question: "Cầu thủ nào kiến tạo nhiều nhất cho Ronaldo trong thời gian ở Real Madrid?", options: ["Karim Benzema", "Gareth Bale", "Mesut Ozil", "Angel Di Maria"], correct: 0 },
            { question: "Khoảng thời gian Ronaldo chơi bóng đỉnh cao tại Real Madrid kéo dài bao nhiêu năm?", options: ["7 năm", "8 năm", "9 năm", "10 năm"], correct: 2 },

            // 51 - 65: Juventus & Al Nassr
            { question: "Ronaldo gia nhập câu lạc bộ Juventus từ Real Madrid với mức phí khoảng bao nhiêu?", options: ["85 triệu euro", "100 triệu euro", "112 triệu euro", "120 triệu euro"], correct: 1 },
            { question: "Ronaldo có trận ra mắt Serie A trong màu áo Juventus đối đầu với đội bóng nào?", options: ["Chievo", "Lazio", "AC Milan", "Inter Milan"], correct: 0 },
            { question: "Ronaldo giành bao nhiêu chức vô địch Serie A cùng Juventus?", options: ["1", "2", "3", "4"], correct: 1 },
            { question: "Ronaldo mất bao nhiêu trận để đạt mốc 100 bàn thắng cho Juventus?", options: ["115 trận", "125 trận", "131 trận", "140 trận"], correct: 2 },
            { question: "Ronaldo đạt danh hiệu Vua phá lưới Serie A (Capocannoniere) vào mùa giải nào?", options: ["2018/19", "2019/20", "2020/21", "Cả 3 mùa"], correct: 2 },
            { question: "Ronaldo lập kỷ lục trở thành cầu thủ đầu tiên giành Vua phá lưới ở các giải đấu nào?", options: ["Anh, Tây Ban Nha, Pháp", "Anh, Tây Ban Nha, Ý", "Tây Ban Nha, Ý, Đức", "Anh, Ý, Đức"], correct: 1 },
            { question: "Ronaldo rời Juventus để trở lại Man Utd vào tháng năm nào?", options: ["Tháng 1/2021", "Tháng 8/2021", "Tháng 1/2022", "Tháng 6/2022"], correct: 1 },
            { question: "Trong giai đoạn 2 khoác áo Man Utd (2021-2022), ai là người đã nhường lại chiếc áo số 7 cho Ronaldo?", options: ["Bruno Fernandes", "Jadon Sancho", "Edinson Cavani", "Marcus Rashford"], correct: 2 },
            { question: "Mùa giải 2021/22, Ronaldo ghi bao nhiêu bàn thắng trên mọi đấu trường cho Man Utd ở tuổi 37?", options: ["18 bàn", "24 bàn", "28 bàn", "32 bàn"], correct: 1 },
            { question: "Cuộc phỏng vấn gây chấn động khiến Ronaldo chấm dứt hợp đồng sớm với Man Utd thực hiện với ai?", options: ["Piers Morgan", "Gary Neville", "Rio Ferdinand", "Jamie Carragher"], correct: 0 },
            { question: "Ronaldo chính thức gia nhập câu lạc bộ Al Nassr tại Ả Rập Xê Út vào thời gian nào?", options: ["Tháng 11/2022", "Tháng 1/2023", "Tháng 6/2023", "Tháng 9/2023"], correct: 1 },
            { question: "Mức lương ước tính của Ronaldo tại Al Nassr được báo chí thế giới ghi nhận là bao nhiêu mỗi năm?", options: ["100 triệu euro", "150 triệu euro", "200 triệu euro", "250 triệu euro"], correct: 2 },
            { question: "Ronaldo lập kỷ lục ghi bao nhiêu bàn thắng trong một mùa giải Saudi Pro League (2023/24)?", options: ["31 bàn", "33 bàn", "35 bàn", "38 bàn"], correct: 2 },
            { question: "Danh hiệu đầu tiên Ronaldo giành được cùng Al Nassr là gì?", options: ["Saudi Pro League", "Arab Club Champions Cup", "King Cup", "Saudi Super Cup"], correct: 1 },
            { question: "Mục tiêu lớn tiếp theo được Ronaldo đặt ra sau khi vượt mốc 900 bàn thắng là gì?", options: ["950 bàn", "1000 bàn", "1100 bàn", "Vô địch World Cup"], correct: 1 },

            // 66 - 85: Sự nghiệp ĐTQG Bồ Đào Nha
            { question: "Ronaldo có trận ra mắt đội tuyển quốc gia Bồ Đào Nha vào năm nào?", options: ["2001", "2003", "2004", "2005"], correct: 1 },
            { question: "Đội tuyển nào là nạn nhân đầu tiên trong trận ra mắt của Ronaldo cho Bồ Đào Nha?", options: ["Tây Ban Nha", "Kazakhstan", "Hy Lạp", "Thụy Điển"], correct: 1 },
            { question: "Ronaldo ghi bàn thắng đầu tiên trong màu áo ĐTQG tại giải đấu nào?", options: ["EURO 2004", "World Cup 2006", "Vòng loại World Cup 2006", "Giao hữu quốc tế"], correct: 0 },
            { question: "Trận chung kết EURO đầu tiên trong sự nghiệp của Ronaldo diễn ra vào năm nào?", options: ["2004", "2008", "2012", "2016"], correct: 0 },
            { question: "Đội tuyển nào đã đánh bại Bồ Đào Nha trong trận chung kết EURO 2004 trên đất Bồ Đào Nha?", options: ["Pháp", "Hy Lạp", "Cộng hòa Séc", "Hà Lan"], correct: 1 },
            { question: "Ronaldo chính thức đeo băng đội trưởng tuyển Bồ Đào Nha từ năm nào?", options: ["2006", "2008", "2010", "2012"], correct: 1 },
            { question: "Ronaldo cùng Bồ Đào Nha xuất sắc vô địch EURO vào năm nào?", options: ["2012", "2016", "2020", "2024"], correct: 1 },
            { question: "Đội bóng nào bị Bồ Đào Nha đánh bại trong trận chung kết EURO 2016?", options: ["Đức", "Tây Ban Nha", "Pháp", "Ý"], correct: 2 },
            { question: "Trong trận chung kết EURO 2016, điều gì không may xảy ra với Ronaldo ở hiệp 1?", options: ["Nhận thẻ đỏ trực tiếp", "Bị chấn thương phải rời sân bằng cáng", "Phản lưới nhà", "Sút hỏng penalty"], correct: 1 },
            { question: "Dù rời sân vì chấn thương ở chung kết EURO 2016, Ronaldo đã làm gì bên đường biên dọc?", options: ["Đi vào đường hầm khóc", "Cùng HLV Fernando Santos chỉ đạo các đồng đội", "Ngồi ghế dự bị ngủ", "Đi cổ vũ khán giả"], correct: 1 },
            { question: "Ronaldo giành danh hiệu Chiếc giày bạc tại EURO 2016 với bao nhiêu bàn thắng?", options: ["2 bàn", "3 bàn", "4 bàn", "5 bàn"], correct: 1 },
            { question: "Ronaldo cùng Bồ Đào Nha vô địch giải đấu UEFA Nations League vào mùa giải nào?", options: ["2017/18", "2018/19", "2020/21", "2022/23"], correct: 1 },
            { question: "Ronaldo lập cú hat-trick kinh điển vào lưới đội tuyển nào tại vòng bảng World Cup 2018?", options: ["Tây Ban Nha", "Đức", "Argentina", "Brazil"], correct: 0 },
            { question: "Ronaldo là cầu thủ châu Âu đầu tiên cán mốc bao nhiêu bàn thắng cho ĐTQG?", options: ["80 bàn", "100 bàn", "120 bàn", "130 bàn"], correct: 1 },
            { question: "Ronaldo nắm giữ kỷ lục cầu thủ ra sân nhiều nhất lịch sử cho đội tuyển quốc gia nào?", options: ["Tây Ban Nha", "Bồ Đào Nha", "Ý", "Brazil"], correct: 1 },
            { question: "Ronaldo đã tham gia tổng cộng bao nhiêu kỳ World Cup trong sự nghiệp?", options: ["4 kỳ", "5 kỳ", "6 kỳ", "7 kỳ"], correct: 2 },
            { question: "Kỷ lục vĩ đại nào của Ronaldo tại World Cup thiết lập năm 2022?", options: ["Cầu thủ ghi nhiều bàn nhất lịch sử World Cup", "Cầu thủ duy nhất ghi bàn ở 5 kỳ World Cup liên tiếp", "Cầu thủ kiến tạo nhiều nhất World Cup", "Cầu thủ đá chính nhiều trận nhất"], correct: 1 },
            { question: "Ronaldo đã tham gia tổng cộng bao nhiêu kỳ VCK EURO trong sự nghiệp (tính đến 2024)?", options: ["4 kỳ", "5 kỳ", "6 kỳ", "7 kỳ"], correct: 2 },
            { question: "Tổng số bàn thắng Ronaldo ghi được cho đội tuyển Bồ Đào Nha tính đến hiện tại vượt mốc bao nhiêu?", options: ["110+ bàn", "120+ bàn", "130+ bàn", "140+ bàn"], correct: 2 },
            { question: "Ronaldo giành bao nhiêu danh hiệu lớn cùng đội tuyển quốc gia Bồ Đào Nha?", options: ["1 danh hiệu", "2 danh hiệu", "3 danh hiệu", "Không có"], correct: 1 },

            // 86 - 100: Kỷ lục, Thống kê & Biểu tượng
            { question: "Ronaldo chính thức trở thành cầu thủ ghi bàn nhiều nhất lịch sử bóng đá thế giới vào năm nào?", options: ["2020", "2021", "2022", "2023"], correct: 1 },
            { question: "Ronaldo chạm mốc lịch sử bao nhiêu bàn thắng trong các trận đấu chính thức?", options: ["800 bàn", "850 bàn", "900 bàn", "950 bàn"], correct: 2 },
            { question: "Ronaldo giành tổng cộng bao nhiêu Quả bóng vàng (Ballon d'Or) trong sự nghiệp?", options: ["3", "4", "5", "6"], correct: 2 },
            { question: "Ronaldo giành bao nhiêu Chiếc giày vàng châu Âu (European Golden Shoe)?", options: ["3", "4", "5", "6"], correct: 1 },
            { question: "Biệt danh nổi tiếng 'CR7' xuất phát từ đâu?", options: ["Tên viết tắt kết hợp số áo yêu thích", "Tên do fan hâm mộ tự đặt", "Biệt danh do Sir Alex đặt", "Tên thương hiệu thời trang"], correct: 0 },
            { question: "Kiểu ăn mừng 'SIUUU' nổi tiếng của Ronaldo xuất hiện lần đầu tiên trong trận đấu nào?", options: ["Giao hữu gặp Chelsea năm 2013 ở Mỹ", "Trận chung kết Cúp C1 năm 2014", "Trận Siêu kinh điển năm 2012", "Trận ra mắt Real Madrid"], correct: 0 },
            { question: "Cầu thủ nào là đối thủ lớn nhất trong suốt sự nghiệp đỉnh cao của Cristiano Ronaldo?", options: ["Neymar", "Lionel Messi", "Kylian Mbappe", "Ronaldinho"], correct: 1 },
            { question: "Ronaldo có bao nhiêu người con tính đến thời điểm hiện tại?", options: ["3 người", "4 người", "5 người", "6 người"], correct: 2 },
            { question: "Tên bạn đời hiện tại luôn đồng hành cùng Ronaldo là ai?", options: ["Irina Shayk", "Georgina Rodriguez", "Paris Hilton", "Luciana Abreu"], correct: 1 },
            { question: "Ronaldo là vận động viên thể thao sở hữu lượng người theo dõi lớn nhất trên nền tảng mạng xã hội nào?", options: ["Facebook", "Instagram", "TikTok", "X (Twitter)"], correct: 1 },
            { question: "Kênh YouTube cá nhân của Ronaldo mang tên gì?", options: ["CR7 Channel", "UR Cristiano", "Ronaldo Official", "The Real CR7"], correct: 1 },
            { question: "Kênh YouTube của Ronaldo phá vỡ kỷ lục đạt 1 triệu người đăng ký trong thời gian bao lâu?", options: ["1 tiếng", "90 phút", "3 tiếng", "5 tiếng"], correct: 1 },
            { question: "Ronaldo thuận chân nào khi chơi bóng?", options: ["Chân trái", "Chân phải", "Thuận cả hai chân như nhau", "Chân trái nhưng sút chân phải tốt hơn"], correct: 1 },
            { question: "Chiều cao chính thức của Cristiano Ronaldo là bao nhiêu?", options: ["1m82", "1m85", "1m87", "1m89"], correct: 2 },
            { question: "Câu nói nổi tiếng nào thể hiện rõ nhất tinh thần nỗ lực không ngừng nghỉ của Ronaldo?", options: ["Talent without working hard is nothing", "Your love makes me strong, your hate makes me unstoppable", "Play for the badge", "Never give up on your dreams"], correct: 1 }
        ];
        // --- HẾT DATABASE 100 CÂU HỎI ---

        function shuffleArray(array) {
            const arr = [...array];
            for (let i = arr.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
            return arr;
        }

        let selectedQuestions = [];
        let currentQ = 0;
        let score = 0;

        function initQuiz() {
            currentQ = 0;
            score = 0;
            const shuffledMaster = shuffleArray(masterQuizData);
            const raw15 = shuffledMaster.slice(0, 15);

            selectedQuestions = raw15.map(item => {
                const correctAnswerText = item.options[item.correct];
                const shuffledOptions = shuffleArray(item.options);
                const newCorrectIndex = shuffledOptions.indexOf(correctAnswerText);
                return {
                    question: item.question,
                    options: shuffledOptions,
                    correct: newCorrectIndex
                };
            });

            const resDiv = document.getElementById('quiz-results');
            const containerDiv = document.getElementById('quiz-container');
            if (resDiv) resDiv.classList.add('hidden');
            if (containerDiv) containerDiv.classList.remove('hidden');
            loadQuestion();
        }

        function loadQuestion() {
            if (!selectedQuestions.length) return;
            const q = selectedQuestions[currentQ];
            const prog = document.getElementById('quiz-progress');
            const quest = document.getElementById('quiz-question');
            const badge = document.getElementById('quiz-score-badge');
            const feedback = document.getElementById('quiz-feedback');
            const nextBtn = document.getElementById('quiz-next-btn');

            if (prog) prog.innerText = `Câu ${currentQ + 1} / ${selectedQuestions.length}`;
            if (quest) quest.innerText = q.question;
            if (badge) badge.innerText = `Điểm: ${score}`;
            if (feedback) feedback.innerText = '';
            if (nextBtn) nextBtn.classList.add('hidden');

            const optsContainer = document.getElementById('quiz-options');
            if (!optsContainer) return;
            optsContainer.innerHTML = '';

            q.options.forEach((opt, idx) => {
                const btn = document.createElement('button');
                btn.className = "w-full text-left p-4 rounded-xl bg-tBg border border-tBorder hover:border-tAccent text-tText text-sm font-semibold transition-all flex justify-between items-center shadow-sm";
                btn.innerText = opt;
                btn.onclick = () => checkAnswer(idx, btn);
                optsContainer.appendChild(btn);
            });
        }

        function checkAnswer(selectedIdx, selectedBtn) {
            const q = selectedQuestions[currentQ];
            const optsButtons = document.querySelectorAll('#quiz-options button');
            const feedback = document.getElementById('quiz-feedback');
            const badge = document.getElementById('quiz-score-badge');
            const nextBtn = document.getElementById('quiz-next-btn');
            
            optsButtons.forEach(btn => btn.disabled = true);
            
            if (selectedIdx === q.correct) {
                score++;
                selectedBtn.classList.remove('bg-tBg', 'border-tBorder');
                selectedBtn.classList.add('bg-emerald-500/20', 'border-emerald-500', 'text-emerald-500');
                selectedBtn.innerHTML += ' <i class="fa-solid fa-circle-check text-emerald-500 ml-2"></i>';
                if (feedback) {
                    feedback.innerText = "Chính xác! SIUUU!";
                    feedback.className = "text-sm font-extrabold text-emerald-500";
                }
            } else {
                selectedBtn.classList.remove('bg-tBg', 'border-tBorder');
                selectedBtn.classList.add('bg-[#E50914]/20', 'border-[#E50914]', 'text-[#E50914]');
                selectedBtn.innerHTML += ' <i class="fa-solid fa-circle-xmark text-[#E50914] ml-2"></i>';
                
                const correctBtn = optsButtons[q.correct];
                if (correctBtn) {
                    correctBtn.classList.remove('bg-tBg', 'border-tBorder');
                    correctBtn.classList.add('bg-emerald-500/20', 'border-emerald-500', 'text-emerald-500');
                }
                if (feedback) {
                    feedback.innerText = `Chưa đúng! Đáp án đúng là: ${q.options[q.correct]}`;
                    feedback.className = "text-sm font-extrabold text-[#E50914]";
                }
            }
            
            if (badge) badge.innerText = `Điểm: ${score}`;
            if (nextBtn) nextBtn.classList.remove('hidden');
        }

        const nextBtn = document.getElementById('quiz-next-btn');
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                currentQ++;
                if (currentQ < selectedQuestions.length) {
                    loadQuestion();
                } else {
                    const containerDiv = document.getElementById('quiz-container');
                    const resDiv = document.getElementById('quiz-results');
                    const finalScore = document.getElementById('quiz-final-score');
                    
                    if (containerDiv) containerDiv.classList.add('hidden');
                    if (resDiv) resDiv.classList.remove('hidden');
        
                    // --- ĐOẠN PHÂN LOẠI MỚI THAY THẾ CHO DÒNG ĐIỂM CŨ ---
                    let rankTitle = "";
                    if (score <= 5) {
                        rankTitle = "Bạn là Riconcard";
                    } else if (score <= 10) {
                        rankTitle = "Bạn là Ricon";
                    } else {
                        rankTitle = "Fan Ronaldo";
                    }
        
                    if (finalScore) {
                        finalScore.innerHTML = `<span class="block text-2xl font-black theme-gradient-text mb-2">${rankTitle}</span><span class="text-sm text-tMuted font-medium">Bạn đã trả lời đúng ${score} / ${selectedQuestions.length} câu!</span>`;
                    }
                }
            });
        }

        const restartBtn = document.getElementById('quiz-restart-btn');
        if (restartBtn) {
            restartBtn.addEventListener('click', () => {
                initQuiz();
            });
        }

        // --- LOGIC MỞ MENU MOBILE ---
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        if (mobileMenuBtn && mobileMenu) {
            mobileMenuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });

            mobileMenu.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.add('hidden');
                });
            });
        }

        // --- DATA & LOGIC POPUP BẢNG GIỚI THIỆU CLB ---
       const clubDetailsData = {
            sporting: {
                title: "Sporting CP",
                subtitle: "Bệ phóng Lisbon (2002 - 2003)",
                years: "2002 - 2003",
                badge: "image/sprt.png",
                cr7Img: "image/cr7_sporting.jpg",
                desc: "Nơi khởi nguồn của huyền thoại. Ở tuổi 17, Cristiano Ronaldo đã làm đảo lộn hàng phòng ngự Man Utd trong trận giao hữu năm 2003, khiến Sir Alex Ferguson quyết tâm ký hợp đồng ngay lập tức.",
                matches: "31", goals: "5", ratio: "0.16",
                borderColor: "border-emerald-500/50", glowColor: "shadow-[0_0_50px_rgba(16,185,129,0.3)]",
                link: "sporting.html"
            },
            mu: {
                title: "Manchester United",
                subtitle: "🔥 THE RED DEVILS - QUỶ VƯƠNG OLD TRAFFORD",
                years: "2003 - 2009 & 2021 - 2022",
                badge: "image/mu.png",
                cr7Img: "image/cr7_mu.jpg",
                desc: "Thánh địa Old Trafford — nơi linh hồn Quỷ Đỏ thức tỉnh! Mang chiếc áo số 7 huyền thoại, CR7 thiêu rụi mọi hàng phòng ngự, thâu tóm 3 Premier League, 1 Champions League và Quả Bóng Vàng 2008!",
                matches: "346", goals: "145", ratio: "0.42",
                borderColor: "border-red-500/60", glowColor: "shadow-[0_0_60px_rgba(239,68,68,0.4)]",
                link: "mu.html"
                
            },
            real: {
                title: "Real Madrid",
                subtitle: "Kỷ Nguyên Hoàng Kim (2009 - 2018)",
                years: "2009 - 2018",
                badge: "image/real.png",
                cr7Img: "image/cr7_real.jpg",
                desc: "Đỉnh cao lịch sử bóng đá với 450 bàn thắng sau 438 trận. Giành 4 chức vô địch UEFA Champions League (với cú hat-trick C1 liên tiếp 2016-2018) và 4 Quả Bóng Vàng.",
                matches: "438", goals: "450", ratio: "1.03",
                borderColor: "border-amber-400/60", glowColor: "shadow-[0_0_60px_rgba(251,191,36,0.4)]",
                link: "real.html",
                
            },
            juventus: {
                title: "Juventus FC",
                subtitle: "Chinh phục Serie A (2018 - 2021)",
                years: "2018 - 2021",
                badge: "image/juv.png",
                cr7Img: "image/cr7_juve.jpg",
                desc: "Thống trị bóng đá Ý với 2 Serie A và lập kỷ lục đạt mốc 100 bàn thắng nhanh nhất lịch sử Juve. Trở thành cầu thủ đầu tiên đoạt Vua phá lưới ở Anh, TBN và Ý.",
                matches: "134", goals: "101", ratio: "0.75",
                borderColor: "border-slate-300/40", glowColor: "shadow-[0_0_50px_rgba(255,255,255,0.2)]",
                link: "juventus.html"
            },
            alnassr: {
                title: "Al Nassr",
                subtitle: "Tiên phong tại Ả Rập (2023 - Hiện tại)",
                years: "2023 - Hiện tại",
                badge: "image/al.png",
                cr7Img: "image/cr7_alnassr.jpg",
                desc: "Tiên phong mở ra kỷ nguyên mới cho bóng đá châu Á. Lập kỷ lục ghi 35 bàn trong một mùa giải Saudi Pro League và hướng tới cột mốc vĩ đại 1.000 bàn thắng.",
                matches: "60+", goals: "60+", ratio: "1.0+",
                borderColor: "border-yellow-500/50", glowColor: "shadow-[0_0_50px_rgba(234,179,8,0.3)]",
                link: "alnassr.html"
            },
            portugal: {
                title: "Bồ Đào Nha",
                subtitle: "Anh hùng dân tộc (2003 - 2026)",
                years: "2003 - 2026",
                badge: "image/bdn.png?v=2",
                cr7Img: "image/cr7_portugal.jpg",
                desc: "Đội trưởng huyền thoại đưa Bồ Đào Nha xưng vương tại EURO 2016 và Nations League 2019. Cầu thủ ghi nhiều bàn thắng nhất lịch sử bóng đá quốc tế (130+ bàn).",
                matches: "234", goals: "146", ratio: "0.62",
                borderColor: "border-red-600/50", glowColor: "shadow-[0_0_50px_rgba(220,38,38,0.3)]",
                link: "portugal.html"
            }
        };

        // Nạp trước và giải mã ảnh modal để đổi CLB không lóe ảnh cũ.
        const clubImageCache = new Map();
        function preloadClubImage(src) {
            if (!clubImageCache.has(src)) {
                const image = new Image();
                const loaded = new Promise((resolve, reject) => {
                    image.onload = () => resolve(image);
                    image.onerror = () => reject(new Error(`Không tải được ảnh: ${src}`));
                    image.src = src;
                    if (image.complete) {
                        if (image.naturalWidth > 0) resolve(image);
                        else reject(new Error(`Không tải được ảnh: ${src}`));
                    }
                });
                clubImageCache.set(src, loaded);
            }
            return clubImageCache.get(src);
        }
        Object.values(clubDetailsData).forEach(data => {
            preloadClubImage(data.badge);
            preloadClubImage(data.cr7Img);
            preloadClubImage(data === clubDetailsData.real ? "image/realnocolor.jpg" : data.badge);
        });
        let activeClubImageRequestId = 0;

        const modal = document.getElementById('club-modal');
        const modalContainer = document.getElementById('club-modal-card');
        const closeModalBtn = document.getElementById('close-modal-btn');
        const openModalBtns = document.querySelectorAll('.open-modal-btn');
        const juventusTag = document.getElementById('juventus-tag');
        const devilHorns = document.getElementById('devil-horns');
        const devilWingsFull = document.getElementById('devil-wings-full');
        const sportingOriginTag = document.getElementById('sporting-origin-tag');
        const realCrownTop = document.getElementById('real-crown-top');
        const juventusStars = document.getElementById('juventus-stars');
        const juventusStarsRight = document.getElementById('juventus-stars-right');
        const alnassrTag = document.getElementById('alnassr-tag');
        const alnassrEagle = document.getElementById('alnassr-eagle');
        const alnassrSun = document.getElementById('alnassr-sun');
        const alnassrCamel = document.getElementById('alnassr-camel');
        const alnassrPyramid = document.getElementById('alnassr-pyramid');
        const alnassrSand = document.getElementById('alnassr-sand');
        const alnassrCrownTop = document.getElementById('alnassr-crown-top');
       openModalBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const clubKey = btn.getAttribute('data-club');
                const data = clubDetailsData[clubKey];

                if (data) {
                    document.getElementById('modal-title').innerText = data.title;
                    document.getElementById('modal-subtitle').innerText = data.subtitle;
                    document.getElementById('modal-years').innerText = data.years;
                    document.getElementById('modal-desc').innerText = data.desc;
                    const imageRequestId = ++activeClubImageRequestId;
                    const badgeEl = document.getElementById('modal-badge');
                    const watermarkEl = document.getElementById('modal-bg-watermark');
                    const imgEl = document.getElementById('modal-cr7-img');
                    const watermarkSrc = clubKey === 'real' ? "image/realnocolor.jpg" : data.badge;

                    // Ẩn ảnh CLB trước, rồi chỉ hiện bộ ảnh đúng của lựa chọn mới nhất.
                    badgeEl.style.visibility = 'hidden';
                    watermarkEl.style.visibility = 'hidden';
                    imgEl.classList.add('opacity-0');
                    Promise.all([
                        preloadClubImage(data.badge),
                        preloadClubImage(data.cr7Img),
                        preloadClubImage(watermarkSrc)
                    ]).then(([badgeImage, mainImage, watermarkImage]) => {
                        if (imageRequestId !== activeClubImageRequestId) return;
                        badgeEl.src = badgeImage.src;
                        watermarkEl.src = watermarkImage.src;
                        imgEl.src = mainImage.src;
                        badgeEl.style.visibility = 'visible';
                        watermarkEl.style.visibility = 'visible';
                        imgEl.classList.remove('opacity-0');
                    }).catch(error => {
                        console.error(error);
                        if (imageRequestId !== activeClubImageRequestId) return;
                        badgeEl.src = data.badge;
                        watermarkEl.src = watermarkSrc;
                        imgEl.src = data.cr7Img;
                        badgeEl.style.visibility = 'visible';
                        watermarkEl.style.visibility = 'visible';
                        imgEl.classList.remove('opacity-0');
                    });
                    document.getElementById('stat-matches').innerText = data.matches;
                    document.getElementById('modal-stat-goals').innerText = data.goals;
                    document.getElementById('stat-ratio').innerText = data.ratio;
                    
                    // Ẩn tất cả các khung trích dẫn trước
                    const allQuotes = document.querySelectorAll('#modal-quote-container > div');
                    const quoteContainer = document.getElementById('modal-quote-container');
                    allQuotes.forEach(q => q.classList.add('hidden'));
                    if (quoteContainer) quoteContainer.classList.add('hidden');

                    // Hiện câu trích dẫn tương ứng nếu có
                    const activeQuote = document.getElementById(`quote-${clubKey}`);
                    if (activeQuote && quoteContainer) {
                        quoteContainer.classList.remove('hidden');
                        activeQuote.classList.remove('hidden');
                    }
                    
                    document.getElementById('modal-explore-btn').href = data.link;

                    // Reset các class đặc biệt trước khi áp dụng theme
                    modalContainer.classList.remove('modal-mu', 'modal-sporting', 'modal-real', 'modal-juventus', 'modal-alnassr', 'modal-portugal');
                    modal.classList.remove('alnassr-backdrop'); // <-- Nhét dòng này vào ngay bên dưới dòng trên[cite: 3]
                    // Reset ẩn đi khi mở CLB khác
                    if (realCrownTop) realCrownTop.classList.add('hidden');
                    if (devilHorns) devilHorns.classList.add('hidden');
                    if (devilWingsFull) devilWingsFull.classList.add('hidden');
                    if (sportingOriginTag) sportingOriginTag.classList.add('hidden');
                    if (juventusTag) juventusTag.classList.add('hidden'); 
                    if (juventusStars) juventusStars.classList.add('hidden');
                    if (juventusStarsRight) juventusStarsRight.classList.add('hidden');
                    if (alnassrTag) alnassrTag.classList.add('hidden');
                    if (alnassrEagle) alnassrEagle.classList.add('hidden');
                    if (alnassrSun) alnassrSun.classList.add('hidden');
                    if (alnassrCamel) alnassrCamel.classList.add('hidden');
                    if (alnassrPyramid) alnassrPyramid.classList.add('hidden');
                    if (alnassrSand) alnassrSand.classList.add('hidden');
                    if (alnassrCrownTop) alnassrCrownTop.classList.add('hidden');
                    // Ẩn 4 cúp độc lập của Real Madrid khi mở câu lạc bộ khác
                    document.getElementById('real-trophy-top-left')?.classList.add('hidden');
                    document.getElementById('real-trophy-bottom-left')?.classList.add('hidden');
                    document.getElementById('real-trophy-top-right')?.classList.add('hidden');
                    document.getElementById('real-trophy-bottom-right')?.classList.add('hidden');
                    
                    // Kích hoạt theme theo câu lạc bộ
                    if (clubKey === 'mu') {
                        modalContainer.classList.add('modal-mu');
                        if (devilHorns) devilHorns.classList.remove('hidden');
                        if (devilWingsFull) devilWingsFull.classList.remove('hidden');
                    } else if (clubKey === 'sporting') {
                        modalContainer.classList.add('modal-sporting');
                        if (sportingOriginTag) sportingOriginTag.classList.remove('hidden');
                    } else if (clubKey === 'juventus') {
                        modalContainer.classList.add('modal-juventus'); 
                        if (juventusTag) juventusTag.classList.remove('hidden');       
                        if (juventusStars) juventusStars.classList.remove('hidden');   
                        if (juventusStarsRight) juventusStarsRight.classList.remove('hidden'); 
                    } else if (clubKey === 'real') {
                        modalContainer.classList.add('modal-real');
                        if (realCrownTop) realCrownTop.classList.remove('hidden');
                        
                        // Bật hiển thị cho 4 cúp độc lập theo hình chéo của Real
                        document.getElementById('real-trophy-top-left')?.classList.remove('hidden');
                        document.getElementById('real-trophy-bottom-left')?.classList.remove('hidden');
                        document.getElementById('real-trophy-top-right')?.classList.remove('hidden');
                        document.getElementById('real-trophy-bottom-right')?.classList.remove('hidden');
                    /* === BỔ SUNG 2 DÒNG NÀY VÀO === */
                    }else if (clubKey === 'portugal') {
                        modalContainer.classList.add('modal-portugal');
                    } else if (clubKey === 'alnassr') {
                        modal.classList.add('alnassr-backdrop'); // <-- THÊM DÒNG NÀY ĐỂ ĐỔI MÀU NỀN XUNG QUANH
                        modalContainer.classList.add('modal-alnassr');
                        if (alnassrTag) alnassrTag.classList.remove('hidden');
                        
                        // Bật hiệu ứng sa mạc độc bản cho Al Nassr
                        if (alnassrEagle) alnassrEagle.classList.remove('hidden');
                        if (alnassrSun) alnassrSun.classList.remove('hidden');
                        if (alnassrCamel) alnassrCamel.classList.remove('hidden');
                        if (alnassrPyramid) alnassrPyramid.classList.remove('hidden');
                        if (alnassrSand) alnassrSand.classList.remove('hidden');
                        if (alnassrCrownTop) alnassrCrownTop.classList.remove('hidden');
                    }



                    
                    modal.classList.remove('opacity-0', 'pointer-events-none');
                    modalContainer.classList.remove('scale-90');
                    modalContainer.classList.add('scale-100');
                }
            });
        });
        function hideClubModal() {
            if (modal && modalContainer) {
                modal.classList.add('opacity-0', 'pointer-events-none');
                modalContainer.classList.remove('scale-100');
                modalContainer.classList.add('scale-90');
            }
        }

        if (closeModalBtn) closeModalBtn.addEventListener('click', hideClubModal);

        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) hideClubModal();
            });
        }

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') hideClubModal();
        });

        // Tự động khởi chạy khi tải xong trang
        renderTrophies();
        initQuiz();
