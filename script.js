'use strict'

window.onload = () =>{

    const getSongs = (()=>{


            const songs = [
                {
                    name : 'Aku ikhantse',
                    artist : 'Unkle krack ft Megahertz',
                    image :'krack.jpg',
                    songUrl :"unkle krack ft megahertz - ak'u ikhants'e.mp3",
                    duration :'03:12'
                },
		{
                    name : 'Sponono',
                    artist : 'DJ_Maphorisa Kabza_De_Small ft WizKid Burna_Boy and Casper Nyovest',
                    image :'kabza.jpg',                                                        songUrl :'DJ_Maphorisa_Kabza_De_Small_ft_WizKid_Burna_Boy_and_Casper_Nyovest_-_Sponono.mp3',                                                          duration :'06:34'                                                      },
                {
                    name : 'Circles',
                    artist : 'The big hash',
                    image :'hash.jpg',
                    songUrl :'The_Big_Hash_-_Circles.mp3',
                    duration :'03:17'
                },
		{                                                                              name : 'Aphrikan-Gold',                                                    artist : 'Dj Sliqe feat. Manu-WorldStar',                                  image :'sliqe.jpg',                                                        songUrl:'13-Aphrikan-Gold-feat.-Manu-WorldSt.mp3',                         duration :'03:44'                                                      },
                {
                    name : ' Ne Ke U Rata',
                    artist : 'Kommanda Obbs',
                    image :'komma.jpg',
                    songUrl :'Kommanda Obbs - Ne Ke U Rata.mp3',
                    duration :'03:37' 
                },
		{
                    name : 'Cherub',
                    artist : 'Zoochie Coke Dope',
                    image :'outh.jpg',
                    songUrl :'10-Cherub.mp3',
                    duration :'04:35'
                },
		{
		    name : 'ke tauwe fu',
		    artist: 'Kommanda obbs ft Stogie t',
		    image: 'kom.jpg',
		    songUrl: 'Kommanda obbs ft stogie t ke tauwe fu explicit youtube 2017 02 23 1080p.mp3',
		    duration: '03:49'
		   
		},
		
                {	   
		    name : "Main Ou's",
		    artist: 'Aka ft Youngstacpt',
		    image: 'aka.jpeg',
		    songUrl: 'AKA_-_Main_Ous_ft_YoungstaCPT.mp3',
		    duration: '3:46'
                },
		{                                                                              name : "Rent",                                                             artist : 'Manu worldstar',                                                 image :'Manu.jpg',                                                         songUrl :"Manu_Worldstar_-_Rent.mp3",                                      duration :'03:05'                                                      },
                {
                    name : 'Shape of you',
                    artist : 'Ed sharen',
                    image :'ShapeOfYou.jpg',
                    songUrl :'Shape-of-You.mp3',
                    duration :'04:23' 
                },
		{
                    name : 'Know You',
                    artist : 'LadiPoe ft Simi',
                    image :'sami.jpg',
                    songUrl :'LadiPoe - Know You ft Simi.mp3',
                    duration :'03:50'
                },
                {
                    name : 'Sanana',
                    artist : 'Dj Sliqe feat.Kid-X,Cassper Nyovest',
                    image :'sliqe.jpg',
                    songUrl:'04-Sanana-feat.-Kid-X-Cassper-Nyo.mp3',
                    duration :'03:46' 
                },
		{                                                                              name : 'Oath',                                                             artist : 'zoochie coke dope ft Nasty c',                                   image :'outh.jpg',                                                         songUrl :'Zoocci_Coke_Dope_-_Oath_feat_Nasty_C_.mp3',                      duration :'3:16'                                                       },
                {
                    name : 'Culture vulture',
                    artist : '25k Ft AKA Emtee',
                    image :'25k.jpg',
                    songUrl :'25k_Ft_AKA_Emtee_-_Culture_Vulture_Remix_.mp3',
                    duration :'05:05' 
                },
                {
                    name : 'Nalingi',
                    artist : 'Manu worldstar',
                    image :'Nalingi.jpg',
                    songUrl :'Manu_Worldstar_-_NaLingi.mp3',
                    duration :'03:13' 
                },
		{
                    name: 'kommanda oobs',                                                     artist:'Tlatlamacholo',
                    image: 'kom.jpg',
                    songUrl:'Kommanda obbs - tlatlamacholo (audio).mp3',
                    duration: '03:50'                                                      },
                {
                    name : 'Jerusalema remix',
                    artist : 'Master KG ft Burna Boy X Nomcebo',
                    image :'mr.jpg',
                    songUrl :'Master KG – Jerusalema (Remix) ft Burna Boy X Nomcebo.mp3',
                    duration :'05:38' 
                },
		{                                                                              name : 'Fresh jig',                                                        artist : 'Dj Sliqe feat.Champagne69,25k',                                  image :'sliqe.jpg',                                                        songUrl :'10-Fresh-Jig-feat.-Champagne69-25k.mp3',                         duration :'03:02'                                                      },
		{                                                                              name : 'Unconventional',                                                   artist : 'Dj Sliqe ft Aura',                                               image :'sliqe.jpg',
                    songUrl :'Dj_Sliqe_Ft_Aura_-_Unconventional.mp3',                          duration :'03:51'
                },
		{                                                                              name : 'iLog_Drum',                                                        artist : 'Kabza_De_Small_Ft_Daliwonga',
                    image :'kabza.jpg',
                    songUrl :'Kabza_De_Small_Ft_Daliwonga_-_iLog_Drum.mp3',                    duration :'07:04'                                                      },
                {                                                                              name : 'Let Me Love',                                                      artist : 'Justin Bieber',                                                  image :'letMeLove.jpg',
                    songUrl :'Let-Me-Love.mp3',                                                duration :'03:25'                                                      }
            
            ]

            const animeSong = [
                        
                {
                    name : 'Gum body',
                    artist : 'Burna boy ft Jorja Smith',
                    image :'burna.jpg',
                    songUrl :'BurnaBoy-Gum-Body-feat-Jorja-Smith.mp3',
                    duration :'03:15' 
                },
	        {                                                                              name : 'Dumelang',                                                         artist : 'Malome_Vector_Ft_Blaq_Diamond2',                                 image :'malome.jpeg',                                                      songUrl :'Malome_Vector_Ft_Blaq_Diamond2_-_Dumelang.mp3',                                                                                             duration :'04:58'                                                      },
	        {                                                                              name : 'Mind body soul',                                                   artist : 'Dj sliqe ft. anatii Sy Ari Da Kid',
		    image :'Anati.jpg',                                                        songUrl :'08-Mind-Body-Soul-feat.-Anatii-Sy.mp3',                          duration :'03:06'                                                      },
		{
                    name : 'Play Your Part Africa Unite',                                      artist : 'DJ Maphorisa Kabza De Small Tresor Riky Rick Sha Sha YoungstaCPT Rouge Dee Koala',                                                          image :'phori.jpg',
                    songUrl :'DJ_Maphorisa_Kabza_De_Small_Tresor_Riky_Rick_Sha_Sha_YoungstaCPT_Rouge_Dee_Koala_-_Play_Your_Part_Africa_Unite.mp3',
                    duration :'04:34'
                },
		{
                    name : 'Nalingi',
                    artist : 'Manu worldstar',
                    image :'Nalingi.jpg',                                                      songUrl :'Manu_Worldstar_-_NaLingi.mp3',
                    duration :'03:13'
                },
     		{                                                                              name : "Rent",                                                  		  artist : 'Manu worldstar',                                                 image :'Manu.jpg',                                                         songUrl :"Manu_Worldstar_-_Rent.mp3",                                      duration :'03:05'                                                      },
                {
                    name : "You're the one",
                    artist : 'Elaine',
                    image :'elaine.jpeg',
                    songUrl :"Elaine-you're the one.mp3",
                    duration :'03:20' 
                },
                {
                    name : 'Utatakho remix',
                    artist : 'Yanga cheif ft Boity,Dea koala,Ricky Rick',
                    image :'tata.jpeg',
                    songUrl :'Yanga_Chief_-_Utatakho_Remix_feat_Boity_Dea_Koala_Riky_Rick_.mp3',
                    duration :'03:47' 
                }
                
            ]

        

            let getRecommendedSong =[{}];
            const randomValue = Math.floor(Math.random() * animeSong.length);
            getRecommendedSong[0] = animeSong[randomValue];
    
            

            return {
            songs,
            animeSong,
            getRecommendedSong
            }


    })();



    const DOMStrings = (()=>{
        

        const DOMString = {
            navMenu : document.querySelector('.nav-sec'),
            navOpenBtn : document.querySelector('.navOpen-btn'),
            musicContainer : document.querySelector('.music-sec'),
            slider : document.querySelectorAll('.music-con__list'),
            audioFullScreen : document.getElementById('audio-player-fullscreen'),
            openFullScreen : document.querySelector('.music-controller'),
            fullScreenCloseBtn : document.querySelector('.audio-player__close-btn'),

            audioPlayer : document.querySelector(".audio"),
            audioProgressBar : document.querySelectorAll(".music-controller__progress-bar"),
            audioProgressBarFill : document.querySelectorAll('.music-controller__progress-bar-fill'),
            audioListParent : document.querySelectorAll('.music-con__list'),
            audioHorListParent : document.querySelector('.music-hor__list'),
            recommendedImage : document.getElementById('recommended-image')
        }

        const audioBtnCtrl = {
            audioPlayer : document.getElementById('audio'),
            prevBtn : document.querySelectorAll('.audio-prev-btn'),
            playPauseBtn : document.querySelectorAll('.audio-play-pause-btn'),
            nextBtn : document.querySelectorAll('.audio-next-btn'),
            audioImage : document.querySelectorAll('.audio-image'),
            audioName : document.querySelectorAll('.audio-name'),
            audioSingerName : document.querySelector('.audio-singer-name'),
            audioShuffle : document.querySelectorAll('.audio-shuffle'),
            audioVolume : document.querySelectorAll('.audio-volume'),
            audioRepeat: document.querySelectorAll('.audio-repeat'),
            audioCurrentDuration : document.getElementById('current-duration'),
            audioEndDuration : document.getElementById('end-duration'),
            recommendedPlayBtn : document.getElementById('recommended-play-btn'),
        
        }


        return{
            DOMString,
            audioBtnCtrl,

        }


    })();


    const AnimationClass = (()=>{

        const nav = {
                open : 'nav-open-animation',
                close : 'nav-close-animation'
            }

            return{
                nav
            }

    })();


    const UIController = ((DOMStrings,AnimationClass,getSongs)=>{


        

                
            const DOM = DOMStrings.DOMString , 
                        navMenu = DOM.navMenu ,
                        navBtn = DOM.navOpenBtn , 
                        slider = DOM.slider , 
                        songs = getSongs.songs;

            // Set Cover


            DOM.recommendedImage.src = `img/${getSongs.getRecommendedSong[0].image}`

            
            const swipeUp = new Hammer(DOM.openFullScreen);
            swipeUp.get('swipe').set({direction : Hammer.DIRECTION_ALL});

            const swipeDown = new Hammer(document.body);
            swipeDown.get('swipe').set({direction : Hammer.DIRECTION_ALL});

    
            swipeUp.on('swipeup',() =>{
                navOpenAndClose(false)
                DOM.openFullScreen.setAttribute('style','height : 100% ; opacity : 0;z-index:8')
                DOM.audioFullScreen.setAttribute('style','height : 100% ; opacity : 1 ; z-index:10')
            });

            swipeDown.on('swipedown', () =>{
                DOM.openFullScreen.setAttribute('style','height : 4.6rem; opacity : 1;z-index:10')
                DOM.audioFullScreen.setAttribute('style','height :0 ; opacity :0;z-index:8')
            });
            
            // Navigation Start 
              const navOpenAndClose = (isClose) =>{

                    const isNavBtnVisible = window.getComputedStyle(navBtn).visibility;

                    if(window.getComputedStyle(navMenu).width === '0px' && isClose ==false)
                        return;

                    if(isNavBtnVisible === 'visible'){
                        navMenu.classList.remove(AnimationClass.nav.open);
                        navMenu.classList.remove(AnimationClass.nav.close);
                        const animation = isClose ? AnimationClass.nav.open : AnimationClass.nav.close;
                        navMenu.classList.add(animation);
                    }

                }
            
            navBtn.addEventListener('click',navOpenAndClose.bind(null,true));

            DOM.musicContainer.addEventListener('click',navOpenAndClose.bind(null,false));

            DOM.openFullScreen.addEventListener('click',navOpenAndClose.bind(null,false));
        
            DOM.musicContainer.addEventListener('touchstart',navOpenAndClose.bind(null,false));

            DOM.openFullScreen.addEventListener('touchstart',navOpenAndClose.bind(null,false));
        
          
            // Navigation End 

            // Music Horizonatal Slider Start

        
            let isDown, startX, scrollLeft;

            isDown = false;
        
        
            slider.forEach(btn => btn.addEventListener('mouseleave', () => isDown = false ));
        
            slider.forEach( btn => btn.addEventListener('mouseup', () => isDown = false ));

            slider.forEach( btn => {
                btn.addEventListener('mousedown', (e) => {
                    isDown = true;
                    startX = e.pageX - btn.offsetLeft;
                    scrollLeft = btn.scrollLeft;
                });
            });
        
        
            slider.forEach( btn => {
                btn.addEventListener('mousemove', (e) => {
                    if(!isDown) return;
                    e.preventDefault();
                    const x = e.pageX - btn.offsetLeft;
                    const walk = (x - startX) * 3; //scroll-fast
                    btn.scrollLeft = scrollLeft - walk;
                });
            });

            // Music Horizonatal Slider Start 


            // Add Song UI 


            const addListUI = ( listChange , i)  =>{ 

                const content = `<div class="music-con__item">
                                <div class="music-con__img">
                                    <img src="img/${songs[i].image}" alt="">
                                    <span class="music-con__play-btn">
                                        <span class="material-icons play-btn">
                                            play_circle_outline
                                        </span>
                                    </span>
                                </div>
                                <div class="music-list__text">
                                    <h3 class="heading-3"> ${songs[i].name} </h3>
                                    <p class="music-artist-name">  ${songs[i].artist} </p>
                                </div>
                            </div>`;

                DOM.audioListParent[listChange].insertAdjacentHTML('beforeend',content); 
            }

                for(let i = 0 ; i < 6 ; i++ ){
                        addListUI(0 , i);
                }

                for(let i = 6 ; i < getSongs.songs.length ; i++ ){
                    addListUI(1 , i);
            }
    
            
            // List UI Added

            for(let i in getSongs.animeSong){

                    const content = `<div class="music-hor__item">
                                        <div class="music-hor__item-inner">
                                            <img src="img/${getSongs.animeSong[i].image}" class="music-hor__img">
                                            <h3 class="music-artist-name">${getSongs.animeSong[i].name}</h3>
                                        </div>
                                        <div class="music-hor__item-inner"> 
                                            <p class="music-hor__music-duration">${getSongs.animeSong[i].duration}</p>                  
                                        </div>
                                    </div> `;
                    
                    DOM.audioHorListParent.insertAdjacentHTML('beforeend',content); 

            }



    })(DOMStrings,AnimationClass,getSongs);


    // Music Contol Model 


    const musicController = ((DOMStrings,getSongs) => {

        const DOM = DOMStrings.DOMString , player = DOM.audioPlayer , audioCtrl = DOMStrings.audioBtnCtrl ,
        musicHoriList  =  document.querySelectorAll('.music-hor__item'),
        musicItems = document.querySelectorAll('.music-con__item') ;
        let currenPlayingSongIndex = 0 , currenListObject = getSongs.songs;

        const volume = {
            off : `<span class="material-icons">
                    volume_off
                </span>`,
            on :`<span class="material-icons">
                    volume_up
                </span>`
        },
        
        HTML = {

            pause : `<span class="material-icons">
                    pause_circle_filled
                    </span>
                    ` ,
            play : ` <span class="material-icons">
                        play_circle_filled
                    </span> `
        }
        
        

        DOM.audioProgressBar.forEach(btn =>{
                btn.addEventListener("click", function seek(e){
                    let percent = e.offsetX / this.offsetWidth;
                    let seekTime = percent * player.duration;
                    player.currentTime = isNaN(seekTime) ? 0.0 : seekTime;
                    DOM.audioProgressBar.value = percent / 100;
                });
        });

        player.addEventListener('timeupdate', ()=>{
            var duration =  player.duration;
        
            if (duration > 0) {
                DOM.audioProgressBarFill.forEach( btn => btn.style.width = ((player.currentTime / duration)*100) + "%" );
            }

            const d = player.currentTime;
            let hours = Math.floor(d / 3600);
            let minutes = Math.floor(d % 3600 / 60);
            let seconds = Math.floor(d % 3600 % 60);

            hours = (hours === 0) ? '' : (zeroPrefixer(hours) + ' : ');

            audioCtrl.audioCurrentDuration.textContent = hours + zeroPrefixer(minutes) + ' : ' + zeroPrefixer(seconds);
    
        });

        const zeroPrefixer = n => ( n < 10) ? ('0'+n) : n ;


        audioCtrl.playPauseBtn.forEach( btn =>{
            btn.addEventListener('click', () => audioCtrl.audioPlayer.paused ?  audioPlayEnable() : audioPlayDisable() );
        });

        

        const audioPlayEnable = () =>{
            audioCtrl.playPauseBtn.forEach( btn => btn.innerHTML = HTML.pause);
            var playPromise  = audioCtrl.audioPlayer.play();
            if (playPromise !== undefined) {
                playPromise.then(_ => {
                }).catch(error => { });
            }
        };

        const audioPlayDisable = () =>{
            audioCtrl.playPauseBtn.forEach( btn => btn.innerHTML = HTML.play);
            audioCtrl.audioPlayer.pause();
        };


        //Set Data Current Playing Music

        const updateAudio = (index) =>  {
                const songObject = currenListObject[index];
                audioCtrl.audioName[0].textContent = songObject.name;
                audioCtrl.audioName[1].textContent = songObject.name;
                audioCtrl.audioImage[0].src = `img/${songObject.image}`;
                audioCtrl.audioImage[1].src = `img/${songObject.image}`;
                audioCtrl.audioSingerName.textContent = songObject.artist;
                audioCtrl.audioPlayer.src =`mp3//${songObject.songUrl}`;
                audioCtrl.audioEndDuration.textContent = songObject.duration;
                DOM.audioProgressBarFill.forEach( btn => btn.style.width = 0 + "%" );
                audioPlayEnable();    
                
        }




        musicItems.forEach( (item, index) => {
                item.addEventListener('click',()=>{
                    currenListObject = getSongs.songs;
                    currenPlayingSongIndex = index;
                    updateAudio(index);    
                });
        });

        

        musicHoriList.forEach( (item, index) => {
            item.addEventListener('click',()=>{
                currenListObject = getSongs.animeSong;
                currenPlayingSongIndex = index;
                updateAudio(index);  
            });
        });



        audioCtrl.recommendedPlayBtn.addEventListener('click',()=>{
            currenListObject = getSongs.getRecommendedSong;
            currenPlayingSongIndex = 0;
            updateAudio(0)
        })



        audioCtrl.nextBtn.forEach( btn =>{
            btn.addEventListener('click',() =>{
                if( currenPlayingSongIndex === currenListObject.length-1)
                    currenPlayingSongIndex = -1;      
                updateAudio(++currenPlayingSongIndex);
            });  

        });

        audioCtrl.prevBtn.forEach( btn =>{
            btn.addEventListener('click',() =>{
                if( currenPlayingSongIndex === 0)
                    currenPlayingSongIndex = currenListObject.length;
                updateAudio(--currenPlayingSongIndex);
            });
        });


    
        audioCtrl.audioPlayer.addEventListener("ended",() =>{
            if(audioCtrl.audioRepeat[0].className.includes('audioSuffle')){
                updateAudio(currenPlayingSongIndex) ;
                return;
            }
            if( currenPlayingSongIndex === currenListObject.length-1)
                    currenPlayingSongIndex = -1;   
            updateAudio(++currenPlayingSongIndex) 
        });

    

        audioCtrl.audioVolume.forEach( btn =>{
            btn.addEventListener('click',() =>{
            const isMuted = audioCtrl.audioPlayer.muted;
            audioCtrl.audioPlayer.muted = !isMuted;
            const icon = isMuted ? volume.on : volume.off;
            audioCtrl.audioVolume[0].innerHTML = icon;
            audioCtrl.audioVolume[1].innerHTML = icon;
            navigator.vibrate(100);
            });
        });

        let isShuffleModeEnable = false;

        audioCtrl.audioShuffle.forEach( btn =>{
            btn.addEventListener('click',() =>{
                audioCtrl.audioShuffle[0].classList.toggle('audioSuffle');
                audioCtrl.audioShuffle[1].classList.toggle('audioSuffle');
                
                if(isShuffleModeEnable){
                    isShuffleModeEnable = false;
                    if( currenListObject.length === getSongs.songs.length)
                        currenListObject = getSongs.songs;
                    else if( currenListObject.length === getSongs.animeSong.length)
                        currenListObject = getSongs.animeSong;
                    else if( currenListObject.length === getSongs.getRecommendedSong.length)
                        currenListObject = getSongs.getRecommendedSong;
            
                }else{
                    currenListObject = shuffle(currenListObject);
                    isShuffleModeEnable = true;
                }

            });
        });


        function shuffle(array) {
            let currentIndex = array.length,
                temporaryValue, randomIndex,
                newArray = new Array(...array);
            
            // While there remain elements to shuffle...
            while (0 !== currentIndex) {
        
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
        
            // And swap it with the current element.
            temporaryValue = newArray[currentIndex];
            newArray[currentIndex] = newArray[randomIndex];
            newArray[randomIndex] = temporaryValue;
            }
        
            return newArray;
        }
        

        audioCtrl.audioRepeat.forEach( btn =>{
            btn.addEventListener('click',() =>{
                audioCtrl.audioRepeat[0].classList.toggle('audioSuffle');
                audioCtrl.audioRepeat[1].classList.toggle('audioSuffle');
            })
        })



        updateAudio(0); //set First Song
        audioPlayDisable();

    })(DOMStrings,getSongs);

	const alerts= () =>{
		let jsAlert = require("js-alert");
		jsAlert.alert("Sorry this is empty").dismissIn(1000*5);
	}

    setTimeout(() => {

        const loader  = document.querySelector('.loading-sec');
        loader.setAttribute('style','opacity : 0');
        setTimeout(() => {
            loader.remove();
        }, 1000);   
        
    }, 3000);
 

}
