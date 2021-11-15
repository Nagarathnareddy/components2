import logo from './logo.svg';
import './App.css';

const basePath = "https://services.brninfotech.com/tws/"
const movieDatastr = JSON.stringify([
  {
    "posters": [
      "media2/posters/GameOver.jpg"
    ],
    "songs": [
      
    ],
    "trailers": [
      "media2/trailers/Game Over.mp4"
    ],
    "title": "Game Over",
    "story": "A nyctophobic gamer has to fight her inner demons to make her way through in the game called life.",
    "director": "Ashwin Saravanan",
    "actors": [
      "Taapsee Pannu",
      " Vinodhini",
      " Ramya Subramanian",
      " Sanchana Natarajan",
      " Anish Kuruvilla"
    ],
    "industry": "Tollywood"
  },
  {
    "posters": [
      "media2/posters/Gaddalakonda Ganesh.jpeg"
    ],
    "songs": [
      "media2/songs/Valmiki/01 - Jarra Jarra.mp3",
      "media2/songs/Valmiki/02 - Gagana Veedhilo.mp3",
      "media2/songs/Valmiki/03 - Waka Waka.mp3",
      "media2/songs/Valmiki/04 - Elluvochi Godaramma.mp3"
    ],
    "trailers": [
      "media2/trailers/Valmiki Trailer.mp4"
    ],
    "title": "Gaddalakonda Ganesh",
    "story": "Abhi (Atharvaa Murali) wants to make a feature film with an antagonist as his lead and finds the perfect muse in the ruthless Gaddalakonda Ganesh (Varun Tej). How he finally manages to make his debut forms the crux of the tale.",
    "director": "Harish Shankar",
    "actors": [
      "Varun Tej",
      " Pooja Hegde",
      " Atharvaa Murali"
    ],
    "industry": "Tollywood"
  },
  {
    "posters": [
      "media2/posters/The_Zoya_Factor_poster.jpg"
    ],
    "songs": [
      "media2/songs/The Zoya Factor/Lucky Charm.mp3"
    ],
    "trailers": [
      "media2/trailers/zoyaFactor.mp4"
    ],
    "title": "The Zoya Factor",
    "story": "The film is a light adaptation of Anuja Chauhan's 2008 novel of the same name,[8] which follows the story of a girl, Zoya Solanki, who becomes a lucky charm for the Indian Cricket team during the 2011 Cricket World Cup, and the skipper Nikhil Khoda who doesn't believe in luck and superstitions.",
    "director": "Abhishek Sharma",
    "actors": [
      "Sonam Kapoor",
      "Dulquer Salmaan"
    ],
    "industry": "Bollywood"
  },
  {
    "posters": [
      "media2/posters/ala vaikuntapuri.jpeg"
    ],
    "songs": [
      "media2/songs/Ala Vaikuntapuram lo/01 - Samajavaragamana.mp3",
      "media2/songs/Ala Vaikuntapuram lo/02 - Ramuloo Ramulaa.mp3",
      "media2/songs/Ala Vaikuntapuram lo/03 - OMG Daddy.mp3"
    ],
    "trailers": [
      "media2/trailers/AlaVaikuntapuramloo.mp4"
    ],
    "title": "Ala Vaikuntapuram lo",
    "story": null,
    "director": "Trivikram Srinivas",
    "actors": [
      "Allu Arjun",
      "Pooja Hegde"
    ],
    "industry": "Tollywood"
  },
  {
    "posters": [
      "media2/posters/saahoPoster.jpg"
    ],
    "songs": [
      "media2/songs/Saaho/01 - Pyscho Saiyaan.mp3",
      "media2/songs/Saaho/02 - Ye Chota Nuvvunna.mp3",
      "media2/songs/Saaho/03 - Bad Boy.mp3",
      "media2/songs/Saaho/04 - Baby Wont You Tell Me.mp3",
      "media2/songs/Saaho/05 - Saaho Bang.mp3"
    ],
    "trailers": [
      "media2/trailers/saaho.mp4"
    ],
    "title": "Saaho",
    "story": "Roy, the crime boss of Waaji City's underworld, is killed in a car accident. Devaraj, the son of a former crime boss, declares himself the next leader of the crime syndicate; he is supported by some members, but opposed by the rest. However, Roy's son Vishwank foils his plans by succeeding his father as the next boss. Vishwank is also determined to unmask his father's murderer and sets out to lead Waaji City. And rest see in theaters",
    "director": "Sujeeth",
    "actors": [
      "Prabhas",
      "Shraddha Kapoor"
    ],
    "industry": "Tollywood"
  },
  {
    "posters": [
      "media2/posters/Sye Raa Narasimha Reddy.jpg"
    ],
    "songs": [
      "media2/songs/SyeRaa/01 - Sye Raa.mp3",
      "media2/songs/SyeRaa/02 - Jaago Narasimhaa Jaagore.mp3",
      "media2/songs/SyeRaa/03 - Andam Ankitam.mp3",
      "media2/songs/SyeRaa/04 - Swaasalona Desame.mp3"
    ],
    "trailers": [
      "media2/trailers/Sye Raa.mp4"
    ],
    "title": "Sye Raa Narasimha Reddy",
    "story": "Narasimha Reddy (Chiranjeevi) is a palegaar whose blood boils at the thought of the British East India Company looting his countrymen and treating them like second-class citizens. What happens when he decides to kick-start a revolution with the help of the very people who’re downtrodden?",
    "director": "Surender Reddy",
    "actors": [
      "Chiranjeevi",
      " Jagapati Babu",
      " Nayanthara",
      " Vijay Sethupathi",
      " Tamannaah Bhatia",
      " Amitabh Bachchan",
      " Kichcha Sudeepa",
      " Ravi Kishan",
      " Nassar",
      " Mukesh Rishi"
    ],
    "industry": "Tollywood"
  },
  {
    "posters": [
      "media2/posters/Khaidi.jpg"
    ],
    "songs": [
      
    ],
    "trailers": [
      "media2/trailers/Khaidi.mp4"
    ],
    "title": "Khaidi",
    "story": "A prisoner on parole is on his way to meet his daughter. He is enlisted to protect a few cops. With gangster on their heels, can this prisoner save the day?\n\nKhaidi Review: Khaidi begins with a superb setup. Bejoy (Narain) leads a team of cops to confiscating a record amount of cocaine, hidden in a secret cell under the commissioner’s office. The drug mafia manages to put the officers under sedation by spiking their drinks. An injured Bejoy enlists Dilli (Karthi), a life-term prisoner who’s out on parole to meet the daughter he has never seen to save the situation. A group of college students find themselves stranded at the commissioner’s office with a line constable for company. They prevent the gangsters from breaking in.\n\nThe best part is, Lokesh Kanagaraj gives us all this in the first 20 minutes of Khaidi, a tense, impressively shot action thriller, with Sathya Sooryan wielding the camera. The director manages to give us a pure genre film minus the commercial frills so common for South Indian cinema. Despite the two hours of action scenes, one hardly feels exhausted, thanks to excellent action choreography by Anbariv. The situation Dilli finds himself in is like a video game, crossing challenges of varying difficulty to transport the cops to safety. Different kinds of stunts, a chase, fist fights, et al are thrown in and just when it seems like it’s getting monotonous, there’s a glorious shootout. The fact that the entire film takes place in the span of a night gives it a unique flavour.\n\nLokesh also comes up with interesting motley of characters like the temperamental brother of a gangster, the bold constable, resourceful students, spies in both camps and the daughter waiting for her father. The performances are just solid all-around with Narain lending just the right amount of vulnerability, Dheena adding levity and Karthi delivering a muscular performance. He especially moves you in the scene he narrates his past.\n\nIf there’s fault, it lies only in Khaidi’s length, which is too long for its genre. A couple of action-blocks gets over-indulgent, but we cannot complain!",
    "director": "Lokesh Kanagaraj",
    "actors": [
      "Karthi",
      " Narain",
      " Ramana",
      " Yogi Babu",
      " Ponvannan",
      " Thalaivasal Vijay"
    ],
    "industry": "Kollywood"
  },
  {
    "posters": [
      "media2/posters/Agent Sai Srinivasa Athreya.jpg"
    ],
    "songs": [
      "media2/songs/AgentSaiSrinivasAthreya/Sherlock Holmes-Naasongs.me.mp3"
    ],
    "trailers": [
      "media2/trailers/AgentSaiSrinivasaAthreyaTeaser.mp4"
    ],
    "title": "Agent Sai Srinivasa Athreya",
    "story": "Agent Sai Srinivasa Athreya (Naveen Polishetty) is a brilliant, underrated detective from Nellore who runs an agency called FBI which sees no business. He gets more than what he asked for when a case happens to fall right into his lap out of nowhere.\n\nReview: Agent Sai Srinivasa Athreya is a brilliantly executed, no nonsense film which makes it clear from get-go about the kind of story it wants to tell. This is not the kind of film that will pander to a commercial audience, nor is it the kind of film which will allow itself to be diluted with unnecessary tropes. There will be no feel-good moments to make your chest untighten when the gristly core of the story shows it face nor there any relief at the end to make it seem that everything is right in the world. This is exactly why Agent Sai Srinivasa Athreya is the kind of film that needs to be seen with a story that needs to be told.\n\nAgent Athreya (Naveen Polishetty) is a detective grieving his dead mother and running a detective agency called FBI (you will want to watch the film to know why it’s named as such) from a vegetable market in Nellore. In the confines of peeling wall paint and flickering bulbs, Agent Athreya and his assistant Sneha (Sruthi) solve cases that are clearly beneath him, but it’s all he can get. He believes his reputation precedes him and his brilliant yet humorous mind yearns for complicated cases. In midst of an un-ideal situation, Agent Athreya happens to chance upon just that – a heart-wrenching case that’s worth his time if only for the grieving father. But as he begins joining the dots, something far more sinister is unearthed.\n\nAgent Sai Srinivasa Athreya is the kind of film that acts like a slow burn. You go in expecting a few jokes here and there and maybe a case that’s not as complicated as the one you’re shown, but something that our hero manages to solve and save the day. And that’s how it begins too. The film takes its own sweet time giving you details you don’t know you will need later and setting up characters, especially with Agent Athreya’s backstory. The pace honestly makes one impatient and you truly wonder why you’re being given all these details that have nothing to do with the case at hand. But director Swaroop and Naveen (who co-wrote the screenplay) manage to pull the carpet right from under your feet and you’re left wondering what you just played witness to. To reveal anything more about the tale would be a great injustice, for it is something that truly needs to be seen on-screen.\n\nFilms like these – a true-blue detective thriller – are usually let down by loopholes, especially when they’re based on crime that takes place in real life every day. Does Agent Sai Srinivasa Athreya have no loopholes? Maybe it does, but Swaroop and Naveen keep you so busy; you really don’t have time to think about it all, even during the draggy bits. Naveen makes a fantastic debut as a lead with this one and truly seems to live in the skin of his character. There’s not one scene that makes you seem like he’s out of place and while he unsurprisingly aces through the humorous bits, it’s the scenes that require him to show emotion that catches you unaware. Shruti as Sneha is really good, but this is Naveen and his character Athreya’s show all the way. Suhas makes an impressive cameo as Detective Bobby, Athreya’s Tamil counterpart.\n\nWhile Swaroop delivers a sound film, Mark K Robin’s music and Sunny Kurapati’s cinematography help set the mood in many scenes. Watch the film this weekend if no-frills detective thrillers are your cup of tea; watch this one ever more so if you’re jonesing for some for something fresh that’ll make you think. You won’t regret it!",
    "director": "Swaroop RSJ",
    "actors": [
      "Naveen Polishetty",
      "Shruti Sharma",
      "Darbha Appaji Ambarisha"
    ],
    "industry": "Tollywood"
  },
  {
    "posters": [
      "media2/posters/Pehlwaan.jpg"
    ],
    "songs": [
      "media2/songs/Pahalwan/01 - Vachaadayyo Pahalwan (Theme Song).mp3",
      "media2/songs/Pahalwan/02 - Kanne Pichuka.mp3",
      "media2/songs/Pahalwan/03 - Jai Ho Pahalwan.mp3",
      "media2/songs/Pahalwan/04 - Fire U Brandu.mp3",
      "media2/songs/Pahalwan/05 - Dhruvataara.mp3",
      "media2/songs/Pahalwan/06 - Yodhudaa.mp3",
      "media2/songs/Pahalwan/07 - Prema Kaalam.mp3",
      "media2/songs/Pahalwan/08 - Mangalyam Theme.mp3",
      "media2/songs/Pahalwan/09 - Stunt Theme.mp3"
    ],
    "trailers": [
      "media2/trailers/Pehlwaan.mp4"
    ],
    "title": "Pehlwaan",
    "story": "Krishna is an orphan who is brought up by a gymkhana owner named Sarkar as his own. He grows up to be a fierce wrestler, but when he decides to follow his heart and pursue love, a conflict arises. Will he be able to resolve it all?",
    "director": "S. Krishna",
    "actors": [
      "Kichcha Sudeepa",
      " Suniel Shetty",
      " Aakanksha Singh"
    ],
    "industry": "Sandalwood"
  },
  {
    "posters": [
      "media2/posters/Manmadhudu 2.jpg"
    ],
    "songs": [
      "media2/songs/Manmadhudu2/01 - Hey Menina.mp3",
      "media2/songs/Manmadhudu2/02 - Naa Lonaa.mp3",
      "media2/songs/Manmadhudu2/03 - Maa Chakkani Pellanta.mp3"
    ],
    "trailers": [
      "media2/trailers/Manmadhudu_2.mp4"
    ],
    "title": "Manmadhudu 2",
    "story": "When a commitment-phobic casanova gets an ultimatum from his family to get married within three months, he hires a waitress to be his pretend-fiance and ditch him on his wedding day so that his family gets off his back. However, things don't go according to plan, causing severe consequences.",
    "director": "Rahul Ravindran",
    "actors": [
      "Nagarjuna Akkineni",
      " Rakul Preet Singh",
      " Vennela Kishore",
      " Lakshmi",
      " Rao Ramesh"
    ],
    "industry": "Kollywood"
  },
  {
    "posters": [
      "media2/posters/Frozen 2.jpg"
    ],
    "songs": [
      
    ],
    "trailers": [
      "media2/trailers/Frozen2OfficialTrailer.mp4"
    ],
    "title": "Frozen 2",
    "story": "Three years after the events of Frozen, Elsa suddenly begins to hear strange voices calling to her from the forest, and Arendelle finds itself in danger. Elsa, Anna, Kristoff, Olaf and Sven must go beyond Arendelle to find the origin of Elsa`s powers and save their kingdom.",
    "director": "Chris Buck",
    "actors": [
      "Kristen Bell",
      " Evan Rachel Wood",
      " Jonathan Groff",
      " Idina Menzel",
      " Priyanka Chopra",
      " Parineeti Chopra",
      " Alan Tudyk",
      " Josh Gad",
      " Jason Ritter",
      " Jeremy Sisto",
      " Martha Plimpton"
    ],
    "industry": "Hollywood"
  },
  {
    "posters": [
      "media2/posters/WarPoster.jpg"
    ],
    "songs": [
      "media2/songs/war/jai jai.mp3"
    ],
    "trailers": [
      "media2/trailers/war.mp4"
    ],
    "title": "War",
    "story": "Somewhere in Delhi, as a scene opens, a mysterious sniper is contacted by an aged secret agent, V.K. Naidu (Mohit Chauhan), to kill a target from a distance. However, the sniper instead shoots Naidu, and escapes, and is thus shown to be rogue former Research and Analysis Wing agent Kabir Luthra (Hrithik Roshan), who is one of the most excellent and top-ranking officers the agency has ever seen. rest see in theaters.",
    "director": "Siddharth Anand",
    "actors": [
      "Hrithik Roshan",
      "Tiger Shroff"
    ],
    "industry": "Bollywood"
  },
  {
    "posters": [
      "media2/posters/Jersey.jpg"
    ],
    "songs": [
      "media2/songs/JERSEY/01 - Adhento Gaani Vunnapaatuga.mp3",
      "media2/songs/JERSEY/02 - Spirit Of Jersey.mp3",
      "media2/songs/JERSEY/03 - Padhe Padhe.mp3",
      "media2/songs/JERSEY/04 - Prapanchame Alaa.mp3",
      "media2/songs/JERSEY/05 - Needa Padadhani.mp3",
      "media2/songs/JERSEY/06 - Aarambhame Le.mp3"
    ],
    "trailers": [
      "media2/trailers/JERSEY.mp4"
    ],
    "title": "Jersey",
    "story": "Arjun (Nani) is a 36 year old, ex-Ranji best batsman whose career fails to take off. But what happens when he decides to make it to the Indian cricket team despite his age?",
    "director": "Gowtham Tinnanuri",
    "actors": [
      "Nani",
      " Shraddha Srinath",
      " Sathyaraj",
      " Rao Ramesh",
      " Brahmaji"
    ],
    "industry": "Tollywood"
  },
  {
    "posters": [
      "media2/posters/Mallesham.jpg"
    ],
    "songs": [
      "media2/songs/Mallesham/01 - Dhana Dhana Dhann.mp3",
      "media2/songs/Mallesham/02 - Naaku Nuvvani.mp3",
      "media2/songs/Mallesham/03 - Oho Jambiya.mp3",
      "media2/songs/Mallesham/04 - Kotha Kotha Ga.mp3",
      "media2/songs/Mallesham/05 - Aa Challani.mp3",
      "media2/songs/Mallesham/06 - Amma Deevena.mp3",
      "media2/songs/Mallesham/07 - Amma Deevena (Instrumental).mp3",
      "media2/songs/Mallesham/08 - Entha Maaya.mp3",
      "media2/songs/Mallesham/09 - Sethikochina Bidda.mp3"
    ],
    "trailers": [
      "media2/trailers/Mallesham.mp4"
    ],
    "title": "Mallesham",
    "story": "A sixth-standard school drop-out faces many ups and downs in life when he decides to design a weaving machine to ease the plight of his mother and many like her in his village, who take up Asu work.\n\nMallesham Review: Mallesham is the biopic of Padma Shri awardee Chintakindi Mallesham, but it doesn’t just show how he succeeded at completing the famous Asu machine, it also showcases the journey of many a Pochampally handloom weaver of Telangana who are deprived due to lack of livelihood from the art. Despite the numerous hardships the protagonist and villagers face, the film never lets the audience lose hope and instead keeps their confidence by finding solutions and searching for light at the end of the tunnel.\n\nIt’s not an easy task to recreate a person’s life or tell the story in a novel manner – especially when the story of someone like Mallesham is known to all, thanks to the TEDx talk he delivered. It’s even more difficult to do so without taking cinematic liberties or caving to the usual tropes. But Mallesham manages to pull off just that, adhering to the story in hand and staying away from glorification or emotional gratification. The film delivers what it promises – the story of a common man who dared to find a practical solution to the issue at hand, a man anyone can relate to. Director Raj Rachakonda needs to be lauded for this.\n\nKicking off in the ‘80s, the film unrolls the realities of handloom weavers of the era, slowly plunging into Mallesham’s childhood when he promises his mother Laxmi (Jhansi) a brighter future than the one they live in. The film progresses from cheerful and innocent childhood to teenage love, until a grown-up Mallesham (Priyadarshi) meets the love of his life Padma (Ananya). The film does a fabulous job of capturing the intricacies of village life in Telangana, everything from local festivals to movie talkies that many have lived by, proving to be a nostalgic trip. The fact that it’s all captured on sync helps it even more.\n\nWhile Mallesham experiences love, he never forgets the conditions his mother and several other weavers live in. Withstanding criticism even from his family, the story delves into how he finds genius ways of coming up with an Asu machine. The dialect might be a little hard to follow at times, but it helps in maintaining the authenticity.\n\nWith Mallesham, Priyadarshi underlines the fact that he’s more than just a comedian; in fact, he’s a fine actor who needs to be taken seriously. Through the film, he maintains a beautiful balance between humour and emotion. Though a new-comer, Ananya justifies her role not just with how adorable she looks, but also the way she manages to pull off her role. Jhansi aces as the caring mother in a role she pulls off with élan.\n\nBalu Sandilyasa’s camerawork helps bring out the nostalgia factor and set the story, while Mark K Robin’s music is effective. Director Raj and Peddinti Ashok Kumar’s script is the true hero here, keeping the audience glued to their seats from the title credits to end. With the path set for films like these with C/o Kancharapalem last year, proving that Telugu industry is capable of delivering indie films that are raw and heart-warming, Mallesham is sure to be a milestone for this year. Everything mentioned above and more is what makes it worth watching.",
    "director": "R. Raghuraj",
    "actors": [
      "Priyadarshi",
      "Ananya Nagalla"
    ],
    "industry": "Tollywood"
  },
  {
    "posters": [
      "media2/posters/gangLeader.jpg"
    ],
    "songs": [
      "media2/songs/Gang Leader/01 - Ra Ra (Roar of the Revengers).mp3",
      "media2/songs/Gang Leader/02 - Hoyna Hoyna.mp3",
      "media2/songs/Gang Leader/03 - Ninnu Chuse Anandamlo.mp3",
      "media2/songs/Gang Leader/04 - Gangu Leader.mp3"
    ],
    "trailers": [
      "media2/trailers/gangLeader.mp4"
    ],
    "title": "Gang Leader",
    "story": "Pencil Parthasarathy is a small-time crime novel writer who watches popular English language movies and rewrites their stories as Telugu novels. Meanwhile, a great robbery takes place in the city where ₹ 300 crores are stolen by 5 individuals. As soon as the robbery is finished, the 5 are found murdered and the money stolen.\n\n5 sorrowful women (1 aged woman, 1 middle aged woman, 1 young woman, 1 teen and 1 small child) who lost their loved ones (the 5 dead robbers) come together and try to find someone who would help them avenge their loved ones. They approach Pencil to help them figure out the culprit. Pencil, at first, refuses to help them but sensing a good (and probably his first) original story, agrees to help them.\n\nAfter a few hilarious twists and turns, the rag tag group finally narrows down on their main suspect: Dev.\n\nDev is a small time ambulance driver turned F1 Racer. As an ambulance driver, Dev never lost a patient due to his skilled and prompt driving of patients to the hospital. However, in order to become a successful race car driver, he needed money. In order to get the money, he joined a group of cancer patients (the original five) who were planning on a robbery to set aside money for their loved ones (the 5 women). After the robbery, Dev kills the 5 men and steals the money and becomes a successful race car driver. Pencil becomes gang leader of those 5 women and decides to take revenge.\n\nIn turn of events, Dev comes to know about Pencil and the women, but Pencil outsmarts him. In the end, Pencil and Dev engage in a fight, where Pencil kills Dev by pulling a car on him, and burning his body later. It is revealed in the end that Pencil had also lost his childhood pet, Sravani, on the same day the 5 women lost their loved ones. Pencil publishes his very first original book and dedicates it to all 5 women, along with his pet dog Sravani. Also, Pencil marries Priya and lives happily ever after with the remaining 4 women, considering them his own family.",
    "director": "Vikram K Kumar",
    "actors": [
      "Nani",
      "Priyanka Arul Mohan",
      "Lakshmi",
      "Saranya Ponvannan",
      "Karthikeya"
    ],
    "industry": "Tollywood"
  },
  {
    "posters": [
      "media2/posters/George Reddy.jpg"
    ],
    "songs": [
      "media2/songs/GeorgeReddy/01 - Vijayam.mp3",
      "media2/songs/GeorgeReddy/02 - Bullet.mp3",
      "media2/songs/GeorgeReddy/03 - Adugu Adugu.mp3",
      "media2/songs/GeorgeReddy/04 - Nalage Anni Nalage.mp3",
      "media2/songs/GeorgeReddy/05 - Jajimogulali.mp3"
    ],
    "trailers": [
      "media2/trailers/GeorgeReddy.mp4"
    ],
    "title": "George Reddy",
    "story": "George Reddy depicts The journey of a revolutionary student leader, who was instrumental in steering the campus struggles from within the confines of university lanes to the streets, and influenced politics in Andhra Pradesh in the '60s and '70s.",
    "director": "Jeevan Reddy",
    "actors": [
      "Devika Daftardar",
      " Sanjay Reddy",
      " Manoj Nandam",
      " Satyadev Kancharana"
    ],
    "industry": "Tollywood"
  }
])
const movieData = JSON.parse(movieDatastr)

const Movie = (props)=>
{
 return (
   <div className="moviesCard">
     <MovieTitle title={props.title}/>
     <MoviePoster poster={props.poster}/>
     <MovieDirector director={props.director}/>
     <MovieTrailer trailers={props.trailers}/>
     <MovieSongs songs={props.songs}/>
     </div>
 )
}
const MovieTitle =(props)=>
{
 return <h2>{props.title}</h2>
 
}
const MoviePoster=(props)=>
{
 return <img src={props.poster}/>
}
const MovieDirector=(props)=>
{
 return <h2>{props.director}</h2>
}
const MovieTrailer=(props)=>
{
  return <video src={basePath+props.trailers[0]} width ="250" height="250" type="video/mp4" controls/>
}
const MovieSongs = (props)=>
{
  return(props.songs.map(()=>
  {
    return(<audio src={basePath+props.songs} type="audio/mpeg" controls />)
  }))
}
function App() {
  console.log(movieData)
  return (
    <div className="moviesList">
      {movieData.map((movie)=>
    {
      
      return<Movie title={movie.title} director={movie.director} poster={basePath+ movie.posters[0]} trailers={movie.trailers} songs={movie.songs}/>
    })}
    
    </div>
  );
}

export default App;
