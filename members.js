 const members = [
      {
        name: "Oliver Baldeo",
        aka: "VERTI                         COLE",
        description: "Our cutie patootie mascot. He himself who swore on being the best gooner.",
        picture: "images/verticol.png",
        socials: {
          instagram: "https://www.instagram.com/_o_liverrr",
          facebook: "https://www.facebook.com/baldeooliver",
          x: "https://x.com/alice"
        }
      },
      {
        name: "Johnas Salivio",
        aka: "EARLING$",
        description: "Mr. Salivioooo, the biggest among the rest but has a slight brain damage.",
        picture: "images/EARLINGS.png",
        socials: {
          instagram: "https://www.instagram.com/nas.salivio",
          facebook: "https://www.facebook.com/Earl.Salivio.06",
          x: "https://x.com/bob"
        }
      },
      {
        name: "Edgar Cabeza",
        aka: "CHIKIDIHH",
        description: "The best at handling the back(end), built like tungtung sahur but will rizz them huzz.",
        picture: "images/chikidih.png",
        socials: {
          instagram: "https://www.instagram.com/lo_0tle",
          facebook: "https://www.facebook.com/its.a.me.mario17",
          x: "https://x.com/carla"
        }
      },
      {
        name: "Francious Diaz",
        aka: "MICOWO",
        description: "He who will become rich like SV, he can give because he has extras. His autos was auctioned for charity.",
        picture: "images/micowor.png",
        socials: {
          instagram: "https://www.instagram.com/micowo_",
          facebook: "https://www.facebook.com/franciousmico.diaz",
          x: "https://x.com/carla"
        }
      },
      {
        name: "Ivan Pestanas",
        aka: "$IG₱R0D",
        description: "Our one and only PESTANAS Productions will back you up with unrivaled lyricism.",
        picture: "images/sigprod.png",
        socials: {
          instagram: "https://www.instagram.com/bout_ivan",
          facebook: "https://www.facebook.com/ivanronan.pestanas",
          x: "https://x.com/carla"
        }
      }
    ];

    let currentIndex = 0;

    function updateMember() {
      const member = members[currentIndex];
      document.getElementById("member-name").textContent = member.name;
      document.getElementById("aka").textContent = member.aka;
      document.getElementById("member-description").textContent = member.description;
      document.getElementById("member-picture").src = member.picture;
      document.getElementById("member-picture").alt = `${member.name} picture`;

      document.getElementById("social-instagram").href = member.socials.instagram;
      document.getElementById("social-facebook").href = member.socials.facebook;
      document.getElementById("social-x").href = member.socials.x;
    }

    function nextMember() {
      currentIndex = (currentIndex + 1) % members.length;
      updateMember();
    }

    function prevMember() {
      currentIndex = (currentIndex - 1 + members.length) % members.length;
      updateMember();
    }
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('active');
    });

    window.onload = updateMember;