// SCREEN 3

const CARDS = [
    {
      id: 1,
      img:"https://i.pinimg.com/originals/e4/15/41/e41541e85745de8f8a88c7cdc622c9b9.jpg"
    },
    {
      id: 2,
      img: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/11/Collage-Maker-13-Nov-2022-1236-PM.jpg"
    },
    {
      id: 3,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE2FSlk24XjcLe3g7TbIuABb0xMzpEumPP7YJQHya2bfmqu06G9U36LFtrXRLATbc7N-w&usqp=CAU"
    },
    {
      id: 4,
      img:"https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/08/coraline.jpg"
    },
    {
      id: 5,
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUIxEX4sWawG3Pc0w47YF8ZXAcRRJUunnOug3v8vDZa6PsC7ZTbUx6EN_tHgEdU2wdS-0&usqp=CAU"
    },
    {
      id: 6,
      img:"https://res.cloudinary.com/doy9e0rxa/image/upload/c_scale,w_448,h_264,dpr_2/f_auto,q_auto/v1684809582/orig.webp?_i=AA"
    },
    {
      id: 7,
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyP3TYINvYpZdBw7L0AU6PmFo2r4UYmYsdCzoO4xX8WoEfM-3rZjEAoy7GBQlb7xe6_Jo&usqp=CAU"
    },
    {
      id: 8,
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS590t_tt999rEQQCF_iDtFapnM7RAcL7-K9EtVSWZJQByRI6Zqk2vbcAAa92Cmngqopls&usqp=CAU"
    },
    {
      id: 9,
      img:"https://cdn-aikll.nitrocdn.com/zpODUSdXaRhrjOSnTvJWtCYyNCoHlwTB/assets/images/optimized/rev-b4a2829/beardoholic.com/wp-content/uploads/2022/01/Cartoon-Characters-Mustaches.jpeg"
    },
    {
      id: 10,
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkOnrVxGTWGD7ue9RMZxluOn3y4_WG2c23RLnVW6_l7aurICdrYQvy51nAgTf1tBR5SaM&usqp=CAU"
    },
    {
      id: 11,
      img:"https://www.shutterstock.com/image-vector/winnie-pooh-illustration-editorial-sticker-260nw-2318593659.jpg"
    },
    {
      id: 12,
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt2Zvmx1pjCp0KAoNI2a_A4u3ctcRuiNGL6wDoXSQ6-vZWeaCuxRzpV8F6s7sALve-KV4&usqp=CAU"
    },
    {
      id: 13,
      img:"https://i.pinimg.com/1200x/07/c4/f5/07c4f50f2f9e98b003a173663311415d.jpg"
    },
    {
      id: 14,
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGP2jxU8xHZxBs8l_-DO_idcZpskNhtPjh-viDZlRdhMtKOtXxqEXxLDNXdi44efI_Teo&usqp=CAU"
    },
    {
      id: 15,
      img:"https://t4.ftcdn.net/jpg/05/97/81/49/360_F_597814912_QY1nedIuVL05R2zKUvUYIRpxx1OBRlvE.jpg"
    },
    {
      id: 16,
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQThhpy72dPqhqV4iGIOGfZv8fbPezxC6sj_aaiCYhEvHKOGi2q_cJ_ddep-JMi4lV4wU0&usqp=CAU"
    },
    {
      id: 17,
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR53uI6KrVTtf9z5mdZWiTRyuSt_y3DGiH1muIxb61APyYAfKjd5w-TDXWt0oLcznoMWtg&usqp=CAU"
    },
    {
      id: 18,
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT777z_Rz6hUxbFcF28EW0FayKUjl5eS8h-q6hlcdUm605klAJ6ci4BWp2sgM7DmCN9xUM&usqp=CAU"
    }
  ];
  const cardContainer = document.querySelector('.card-container');
  const available = document.querySelector('#available');
  const modalTitle = document.querySelector('#modal-title');
  const modal = document.querySelector('#modal');
  let currentCards = [...CARDS, ...CARDS];
  let isPaused = false;
  let counter = CARDS.length + 16;
  let isLose = false;

  //score
  let score = 0;
  const maxScore = currentCards.length-18; 
  const scoreElement = document.getElementById('score');

  scoreElement.innerHTML = `Score: ${score} / ${maxScore}`;



  // background-sound
  const backgroundSound=new Audio("./Assets/game-bg.mp3");
  backgroundSound.volume=1
  backgroundSound.play();
  backgroundSound.loop=true;

  function updateScore() {
    score += 1; 
    scoreElement.innerHTML = `Score: ${score} / ${maxScore}`;
  }
  


  function shuffle(array) {
    let counter = array.length,
      temp,
      index;
    while (counter > 0) {
      index = Math.floor(Math.random() * counter);
      counter--;
      temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
    }
    return array;
  }
 

  function win() {
    isPaused = true;
    modalTitle.innerHTML = `Yay! You win🥳<br>Your final Score:${score}`;
    modal.classList.add('modal--open');
    updateScore();
  }
  
  
  function lose() {
    isLose = true;
    modalTitle.innerHTML = `Oops! You lose😭<br> Your final Score: ${score}`;
    modal.classList.add('modal--open');
  }  
  
  function handleClick(e) {
    const { target } = e;
    if (
      !isPaused &&
      !isLose &&
      !target.classList.contains('card--guessed') &&
      !target.classList.contains('card--picked')
    ) {
      isPaused = true;
      const picked = cardContainer.querySelector('.card--picked');
      if (picked) {
        if (picked.dataset.id === target.dataset.id) {
          target.classList.remove('card--picked');
          picked.classList.remove('card--picked');
          target.classList.add('card--guessed');
          picked.classList.add('card--guessed');
          isPaused = false;
          updateScore();
        } else {
          target.classList.add('card--picked');
          setTimeout(() => {
            target.classList.remove('card--picked');
            picked.classList.remove('card--picked');
            isPaused = false;
          }, 600);
        }
        console.log('counter', counter);
        counter -= 1;
        available.innerHTML = counter;
        if (counter === 0) {
          lose();
        }
      } else {
        target.classList.add('card--picked');
        isPaused = false;
      }
  
      const isWin = cardContainer.querySelectorAll('.card--guessed').length === currentCards.length;
      if (isWin) {
        win();
      }
    }
  }
  

  function drawCards() {
    cardContainer.innerHTML = '';
    available.innerHTML = counter;
    score = 0;
    scoreElement.innerHTML = `Score: ${score} / ${maxScore}`;
  
    shuffle(currentCards).forEach((el) => {
      const card = document.createElement('div');
      card.className = 'card';
      card.setAttribute('data-id', el.id);
      card.innerHTML = `
          <div class="card__front">
            <img
              class="front__img"
              src="${el.img}"
              alt="Card"
            />
          </div>
          <div class="card__back">
            <img
              class="back__img"
              src="https://www.seehratimes.com/wp-content/uploads/2022/07/brain-caricature-lifting-weights.jpg"
              alt="Thought"
            />
          </div>
        `;
      card.addEventListener('click', handleClick);
      cardContainer.appendChild(card);
    });
  }
  
  
  
  document.querySelector('#play-again').addEventListener('click', function () {
    modal.classList.remove('modal--open');
    isPaused = false;
    isLose = false;
    counter = CARDS.length + 16;
    drawCards();
  });
  
  drawCards();
  
    