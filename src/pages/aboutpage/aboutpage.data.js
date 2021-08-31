const team_members = [
  {
    id: 0,
    name: "Shushant Kumar Singh",
    Job: "React Developer, Weapon & Powerup, Sound Design",
    email: "mailto:shushantkumar.singh2019@vitstudent.ac.in",
    github: "https://github.com/Shush25",
    linkdin: "https://www.linkedin.com/in/shushant-kumar-singh-bb016b1b6/",
    insta: "",
    profile: require("../../assets/Shushant/profile.jpg"),
    imageUrl:
      "https://lh3.googleusercontent.com/-DdxNGQg4hPbEmzbCmR08sUX9cuPu1NPQ1wsXmnWo4mt-yPL-wsP8zVx2S9_xDc_ezYdZpX8RmkYdWmSiJUmOt3ZDjFyLyrF1cduSH14E3LmDal786A5Y6PzUgI7xrn6sv7yv8PWjA",
    description:
      "I am Shushant, currently pursuing my B-Tech in CSE from VIT Chennai. A game enthusiast and procrastinator by nature but a Programmer and workaholic by profession. I have worked and contributed on a wide range of projects ranging from simple projects like snake game to the start-up project like real-time Buss tracking System. I am a full-stack Web-Developer with proficiency in modern frameworks like React and React-native. C/C++ is my strongest programming language followed by JavaScript, Java, Python and C#.",
    contribution: [
      {
        id: 0,
        Mdescription:
          "My role in this project is to develop a <b>Power Up and Weapon System</b> for the Hero (Player) to make the game more <b>diverse</b> by giving the Player freedom to develop their <b>own personal play style</b> while playing the game. With the introduction of <b>weapon points</b> in the game it also provides a new layer to the strategy aspect of the game which in turn makes the game more <b>fun and engaging.</b> I also added the <b>Sound Effects</b> which further enhanced the user experience while playing the game. The <b>Webpage</b> in which you are on right now is also designed by me.",
      },
      {
        id: 1,
        title: "Weapons and PowerUp's",
      },
      {
        id: 3,
        styledDescription: [
          {
            id: 0,
            title: "Basic Weapon 1: Pistol",
            description:
              "It is the 1st basic Weapon with the most basic mecanism out of all. It shoots <b>one bullet at a time</b> which travels in a <b>stright and linear direction</b>.",
            imageUrl: require("../../assets/Shushant/shush1.png"),
          },
          {
            id: 1,
            title: "Basic Weapon 2: Sword",
            description:
              "The 2nd Basic Weapon is our traditional and most reliable weapon of all time <b>sword</b>. When activated an animation of sword cut is played and any enemy witin the hitbox of the sword receives damage. Can damage <b>multiple enemies</b> at once.",
            imageUrl: require("../../assets/Shushant/shush2.PNG"),
          },
          {
            id: 2,
            title: "Power-Up 1: Shotgun",
            description:
              "Shotgun works on the simple concept of shooting <b>multiple bullets</b> at the same time in <b>three different directions</b>. After activating this powerup the normal gun transforms into a shotgun which shoots <b>3 bullet's</b> at the same time. Which can either be used to annilate any enemy in <b>close range</b> or can be used as a <b>widespread attack.</b>",
            imageUrl: require("../../assets/Shushant/shush3.PNG"),
          },
          {
            id: 3,
            title: "Power-Up 2: Sword Throw",
            description:
              "This Power-up gives Hero the power to <b>throw his sword in the forward direction</b> damaging all the enemies which comes in contact with it. In short it converts the normal sword slash attack to the sword throw attack.",
            imageUrl: require("../../assets/Shushant/shush4.PNG"),
          },
          {
            id: 4,
            title: "Power-Up 3: Machine Gun",
            description:
              "The third power-up is the all-mighty machine gun use this power-up to completely annihilate your enemies. Shoots <b>continues bullets</b> with a very minimal delay.",
            imageUrl: require("../../assets/Shushant/shush5.PNG"),
          },
        ],
      },
      {
        id: 4,
        title: "Balancing Power-Ups",
      },
      {
        id: 5,
        Mdescription:
          "At first glance the power-ups seems too Over powered and game breaking. That's why the concept of <b>Weapon Point</b> was introduced. Activating each of the power-up <b>uses a certain amount of weapon points</b> which can only be gained by defeating enemies. Other contraints are also placed to further balance these power-ups <br><br><b>Constraint 1:</b> When a Power-up is active killing enemies dosn't reward any weapon point.<br><b>Constraint 2:</b> Weapon points are capped at 1000 points.",
      },
      {
        id: 6,
        imageUrl: require("../../assets/Shushant/shush6.PNG"),
      },
      {
        id: 7,
        Mdescription:
          "<b>Constraint 3:</b> Power-Up Only last's for 10 seconds.<br><b>Constraint 4:</b> The Player Cannot activate 2 or more power-up at the same time.",
      },
      {
        id: 8,
        imageUrl: require("../../assets/Shushant/shush7.PNG"),
      },
      {
        id: 9,
        Mdescription:
          "<br><b>Constraint 5:</b> Every Sword attack has a fireDelay of .4sec. and every Bullet attack has a fireDealy of .6sec only exception being Machine Gun. This is done so that the player can't spam his way through the game.",
      },
      {
        id: 10,
        imageUrl: require("../../assets/Shushant/shush8.PNG"),
      },
      {
        id: 11,
        title: "Audio Effects",
      },
      {
        id: 12,
        Mdescription:
          "The backround theme music of the game, basic game sounds like Jump, Shoot, Collision, Sword Slashing, Sword Throwing were added by implementing a very <b>simple and reusable</b> sound script in unity. The sound is made once in the main sound manager script which can then be <b>imported to any other script</b> in the game and a sound effect can be triggered with just 1 line of code.",
      },
      {
        id: 13,
        heading:
          "Initiating sounds in script (All the sound files are placed in Resources folder):",
      },
      {
        id: 14,
        imageUrl: require("../../assets/Shushant/shush9.PNG"),
      },
      {
        id: 15,
        heading:
          "Making a function which is callable from any other scripts in the entire game",
      },
      {
        id: 16,
        imageUrl: require("../../assets/Shushant/shush10.PNG"),
      },
      {
        heading:
          "Playing Sword-Slash and Sword-Throw Sound with just 1 line of code",
      },
      {
        id: 17,
        imageUrl: require("../../assets/Shushant/shush11.PNG"),
      },
    ],
  },
  {
    id: 1,
    name: "Apoorv Yadav",
    Job: "React Developer, Level Designer, Texture Artist",
    email: "mailto:apoorv.yadav2019@vitstudent.ac.in",
    github: "https://github.com/Apoorv-17",
    linkdin: "https://www.linkedin.com/in/apoorv-yadav-1a54571b7/",
    insta: "",
    imageUrl:
      "https://lh3.googleusercontent.com/ARVj1C0lnGyiwERJZWQXMfzG-gBbQDPm3zzH9qw1RNXvhMVyp31hzFrb1IpLJtBBdouGffMhu2r_6gUeQzwivrwUpdXV0wxgC1cuZmPFB-GQeZwouXJKIMJ8KsL2NmYINwb2yjDufw",
    profile:
      "https://lh3.googleusercontent.com/pw/ACtC-3cfQFLV-FVodvi6EAsCxGnc_zuQ41gqQqVNVfwXwLoEaUw75k6YojIRfgjszqv_KQOi6rguAU-Jb2oBjCy3Z-840vHyoWc4IuK5OPktDDojNh7SqrzhlvK6Z4i82HK_U-4c0EWTJsqd4ndKbAA8CsRYLA=s268-no?authuser=0",
    description:
      "I’m currently pursuing Bachelors of Technology in Computer Science from Vellore Institute of Technology, Chennai. I’m a React Developer and ML enthusiast who loves to learn new skills and technologies. Always willing to innovate new things which can help improve the existing technologies. Proficient in React, React-Native, Firebase, C/C++, Java and MySQL. Have developed various projects on real-life problems using React, React-Native and integrated into Machine Learning it.",
    contribution: [
      {
        id: 0,
        Mdescription:
          "My role in this project is to design different types of enemies along with the various props and artifacts used in the game using Photoshop. Along with that I did the world building of the game in Unity, where I designed the map for the game and did the graphics and level designing. I also developed the interaction of these props with each other and the game.",
      },
      {
        id: 1,
        title: "Description of my Contribution",
      },
      {
        id: 2,
        Mdescription:
          "<b>1)</b> I have used <b>Photoshop</b> to design the various props. I used the concept of <b>Nearest-Neighbour Algorithm</b> to get pixelated images. <b>Pixel Art</b> helps store a large amount of detail into the image. Thorough which we can give utmost attention to details without worrying about the distortion. Since in the nearest neighbour we get sharp edges which helps in storing data in very small sizes and then scale them into desired sizes.",
      },
      {
        id: 7,
        imageUrl: require("../../assets/Apoorv/NNA.jpg"),
      },
      {
        id: 5,
        heading: "I) Creation of Different Enemies using Pixel Art method: ",
      },
      {
        id: 6,
        description:
          "<b>(i) Crab Enemy:</b> This enemy will move only in x-axis of the plane.",
      },
      {
        id: 7,
        imageUrl: require("../../assets/Apoorv/crab.png"),
      },
      {
        id: 6,
        description:
          "<b>(ii) Jumper Enemy:</b> This enemy will move only in both x-axis and y-axis of the plane.",
      },
      {
        id: 7,
        imageUrl: require("../../assets/Apoorv/jumper.png"),
      },
      {
        id: 6,
        description:
          "<b>(iii) Octopus Enemy:</b> This enemy will move only in a zig-zag way in both x-axis and y-axis of the plane.",
      },
      {
        id: 7,
        imageUrl: require("../../assets/Apoorv/octopus.png"),
      },
      {
        id: 8,
        heading: "II) Creating the level Design for the Ground: ",
      },
      {
        id: 9,
        imageUrl: require("../../assets/Apoorv/platform1.png"),
      },
      {
        id: 10,
        imageUrl: require("../../assets/Apoorv/platform2.png"),
      },
      {
        id: 13,
        heading: "III) Various Props for adding details: ",
      },
      {
        id: 15,
        imageUrl: require("../../assets/Apoorv/props.png"),
      },
      {
        id: 13,
        heading: "III) New lava image with animation to show its movement: ",
      },
      {
        id: 15,
        imageUrl: require("../../assets/Apoorv/lava.gif"),
      },
      {
        id: 20,
        title: "2) Assembly the props and Setting up the Game World:",
      },
      {
        id: 2,
        Mdescription:
          "<b>Sketch Design for the Map: </b>For the World building part, I had to first make the rough sketch of the Map which I would implement using the props made through Photoshop.",
      },
      {
        id: 3,
        Mdescription:
          "I made total 3 Maps for different levels and having different features: "
      },
      {
        id: 2,
        imageUrl: require("../../assets/Apoorv/maps.png"),
      },
      {
        id: 2,
        Mdescription: 
          "After taking some features of all the above maps this is the final map I created."
      },
      {
        id: 0,
        imageUrl: require("../../assets/Apoorv/HandMap.jpg"),
      },
      {
        id: 2,
        Mdescription:
          "<b>Map of the Game in Unity: </b>After combining all the props made through Photoshop according to the Map shown above this was the final output. I have used various scaling factors in the X and Y axis to make the Map look even and did the level designing next.",
      },
      {
        id: 0,
        imageUrl: require("../../assets/Apoorv/UnityMap.png"),
      },
      {
        id: 2,
        Mdescription:
          "<b>Addition of 2D Collider in Unity: </b>For assets in a 2D project to have a physical presence in the Scene and be able to interact with each other, they must have a 2D Collider. A 2D Collider is a component that helps define an asset’s physical shape to determine how it will interact with other colliders in a Scene.",
      },
      {
        id: 2,
        Mdescription:
          "     (i)	Now adding <b>Box Collider 2D</b> in the Map: Box Collider is a resizable <b>square shape</b> container. I have used it in various parts of the Game like:",
      },
      {
        id: 0,
        imageUrl: require("../../assets/Apoorv/BCollider.png"),
      },
      {
        id: 2,
        Mdescription:
          "     (i)	Now adding <b>Polygon Collider 2D</b> in the Map: Polygon Collider is a resizable polygon shape container. This one is quite complex since not all pictures are square shape. So to overcome this problem I have used polygon Collider 2D in various parts of the Game like:",
      },
      {
        id: 0,
        imageUrl: require("../../assets/Apoorv/PCollider.png"),
      },
    ],
  },
  {
    id: 3,
    name: "Rishi Mungia",
    Job: "Player Mechanics, Animation & Post-Processing",
    github: "https://github.com/rishimungia",
    linkdin: "https://www.linkedin.com/in/rishi-mungia-7281051b5",
    insta: "",
    email: "mailto:rishi.mungia2019@vitstudent.ac.in",
    imageUrl:
      "https://lh3.googleusercontent.com/pw/ACtC-3c4cg49DSJfZ5KOYAEuipus930DTLm8eszaUZZc0W7jIC1VWuiQ4wwRpDAIDwSwGMkkXJuwSasnquuNlpRCUMFDIrY0gvELxU1_NKl1500ZmqBwX2J1Cxqckc36BrxZ_8YrtgU9xV-FpNQmSNmPtibM=s657-no?authuser=0",
    profile:
      "https://lh3.googleusercontent.com/pw/ACtC-3c4cg49DSJfZ5KOYAEuipus930DTLm8eszaUZZc0W7jIC1VWuiQ4wwRpDAIDwSwGMkkXJuwSasnquuNlpRCUMFDIrY0gvELxU1_NKl1500ZmqBwX2J1Cxqckc36BrxZ_8YrtgU9xV-FpNQmSNmPtibM=s657-no?authuser=0",
    description:
      "I am currently pursuing B. Tech in Computer Science from Vellore Institute of Technology, Chennai. I am a Unity Game Developer and Front-End Developer who loves to learn new bleeding edge technologies and create jaw-dropping graphics. Always willing to innovate new things which can help improve the existing technologies. Proficient in React JS, SCSS, C#, Adobe Suit and Front-end Design.",
    contribution: [
      {
        id: 0,
        Mdescription:
          "My main role in the project was to design the core Player Mechanics like Running, Jumping, Crouching, Wall-Sliding, etc. Along with that the core Game Scripts like how the Enemy and Player Health System, how different Game Objects will interact with each other and the Enemy Spawning System which is integrated with the Machine Learning Model.",
      },
      {
        id: 1,
        Mdescription:
          "Apart from the Scripting, game’s Rendering and Post-Processing using the Unity’s Universal Render Pipeline was done. Which enabled the volumetrics and bloom in the map’s lights for added realism and immersion.",
      },
      {
        id: 2,
        styledDescription: [
          {
            id: 0,
            title: "Player Mechanics",
            description:
              "The core Player Movement script was written in C# using the Unity Engine Libraries. It includes being able to Run, Jump, Double Jump, Crouching, Wall-Sliding.<br><br>The Movement Script utilizes the Unity Physics to move the player sprite in a realistic manner.<br><br><b>A.	Running:</b> This works by getting the <I>Raw Horizontal Input</I> from the input hardware and add velocity to the Player’s <I>Rigid-Body</I> in the appropriate direction.<br><b>B.	Jumping:</b> To prevent player jumping indefinitely, a <I>Transform Game Object</I> is made to check is the Player is standing on ground called <I>Ground-Check</I> and all the ground sprites need the Ground Tag.",
            imageUrl: require("../../assets/Rishi/rishi1.png"),
          },
          {
            id: 1,
            title: "",
            description:
              "<b>C.	Crouching:</b> Making the Player Crouch was a little bit tricky, since we need to modify the Box Collider to get smaller so the Player can fit through tiny gaps in the map.<br><br>We also need to prevent player from standing if it is under an object so for that another Transform Game Object is made as a Ceiling-Check.<br><br>Along with that, the Weapon-Fire-Point needs to be adjusted according to the new player sprite size.",
            imageUrl: require("../../assets/Rishi/rishi2.png"),
          },
          {
            id: 2,
            title: "",
            description:
              "<b>D.	Wall-Sliding:</b> Adding Wall-Sliding for the game character again required to check collision with walls in the map, so to achieve that yet another two Transform Game Objects were required one for either side of the player.<br><br>Now for the actual wall grabbing to work, the velocity in the y-axis was damped using the Mathf.Clamp(  ) function in C#.<br><br>Also, the character sprite needed to be flipped opposite to the wall so that the player could shoot even while wall-sliding, so for that the   Flip( ) function was reused from the Player Running part of the script.",
            imageUrl: require("../../assets/Rishi/rishi3.png"),
          },
        ],
      },
      {
        id: 3,
        title: "Core-Game Mechanics:",
      },
      {
        id: 4,
        description:
          "<b>A.	Player and Enemy Health System:</b> To implement this, a function takeDamage( ) was made for both the player and the enemy. This function could be called inside the Weapon Script and the Enemy Attack Scripts, respectively.<br><br>For the player, when the health became equal to zero, a respawn( ) function was implemented in the Game Manager Script to reset the game. A Heads Up Display (HUD) is also programmed to show the current health of the Player.",
      },
      {
        id: 5,
        styledDescription: [
          {
            id: 0,
            title: "B. Exploding Barrel",
            description:
              "For this game mechanic I added two states to the barrel, normal and activated. When the enemy or player shoots the barrel, it will switch to active state and start to glow in red color as shown in the picture. And when it is shot again, it will explode.<br><br>For the explosion, the barrel creates an area effect in which all the game objects get pushed away from the explosion and if the Player or any Enemies that are in its range will get damaged using the takeDamage( ) function described above.",
            imageUrl: require("../../assets/Rishi/rishi4.png"),
          },
        ],
      },
      {
        id: 6,
        Mdescription:
          "<b>C.	Lava Script:</b> This once again uses the same takeDamage( ) function, but it is programmed to cause an instant death both for the Player and the Enemies. The Lava will also cause the Explosive Barrel to explode immediately skipping the activation state. This makes Lava an extremely dangerous part of the game!",
      },
      {
        id: 7,
        Mdescription:
          "<b>D.	Spawn Manager:</b> This script is an integral part of the gameplay as it controls all the enemy and Power-Ups spawns in the game.<br>This script takes input from the ML model to set the difficulty of the game, by spawning Enemies / Power-Ups accordingly. This leads to some interesting outcomes based on the player’s play style sometimes resulting huge enemy hoards!",
      },
      {
        id: 8,
        title: "Rendering and Post-Processing:",
      },
      {
        id: 9,
        Mdescription:
          "We have used Unity’s Universal Render Pipeline (URP) as the Rendering Engine of our game. This is because it supports 2D Graphics and Lighting. Whereas the HDRP pipeline is made for 3D Games and Ray-Traced applications that was not optimal in our case.",
      },
      {
        id: 10,
        Mdescription:
          "Also, URP is a more robust and performance friendly solution for rendering in modern consoles and mobile devices.",
      },
      {
        id: 11,
        Mdescription:
          "<b>A.	Post-Processing:</b> For our game’s artistic style, I used the Bloom Shader and Global Volume from the Unity’s URP Renderer. Since all the game textures and sprites were Pixel Art, Point Filter mode was used to prevent it from getting blurred.",
      },
      {
        id: 12,
        imageUrl: require("../../assets/Rishi/rishi5.png"),
      },
      {
        id: 13,
        Mdescription:
          "<b>B.	Lighting:</b> It is an integral part of the game as it can make or break player’s immersion. URP provides various 2D Lights that can be added to the scene to achieve different types of looks. For example, we used Point Light for the Lamps and Ceiling Lights to create a realistic volumetric look, and for some dynamic lights that needed to be scripted or animated I used 2D Sprite Light with the help of custom Emission Maps for each frame.",
      },
      {
        id: 14,
        title: "Animation",
      },
      {
        id: 15,
        Mdescription:
          "Adding animation to player’s movements adds yet another layer of immersion to the game. For controlling what animation plays at what time can be set using Unity’s inbuilt Animator and Animation Controller.",
      },
      {
        id: 16,
        styledDescription: [
          {
            id: 1,
            title: "A. Creating Animations",
            description:
              "First we need to make all animations by inserting the animation frames with a fixed delay that will create a sense of motion. ",
            imageUrl: require("../../assets/Rishi/rishigif.gif"),
          },
        ],
      },
      {
        id: 17,
        imageUrl: require("../../assets/Rishi/rishi6.png"),
      },
      {
        id: 18,
        Mdescription: "Dope Sheet for the animation of Barrel Explosion",
      },
      {
        id: 19,
        Mdescription:
          "<b>B.	Making Animations Play:</b> We cannot just set animations to play randomly, instead we want to play them when something is triggered or when something moves. To achieve that I used Unity’s Animator Controller in which we can define a flow of different animations and set the parameters that will trigger the set animation that we can later modify in the C# Scripts.",
      },
      {
        id: 20,
        imageUrl: require("../../assets/Rishi/rishi7.png"),
      },
      {
        id: 21,
        Mdescription: "Animator Flow for the Player Movement",
      },
    ],
  },
];
export default team_members;
