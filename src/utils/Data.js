import One from "../assets/1984.jpeg"//Importing Images
import Catcher from "../assets/Catcher.jpg"//Importing Images
import Hobbit from "../assets/Hobbit.png"//Importing Images
import Dragon from "../assets/Dragon.png"//Importing Images
import Dune from "../assets/Dune.png"//Importing Images
import Harry from "../assets/Harry.png"//Importing Images
import Gone from "../assets/Gone.png"//Importing Images
import Martian from "../assets/Martian.png"//Importing Images
const Data = [//It contains default Data of books
    {
        Name: "The Catcher in the Rye",
        Author: "J.D. Salinger",
        Description: "A story about a disillusioned teenager, Holden Caulfield, who wanders New York City and reflects on his life and the complexities of adulthood.",
        Rating: "4.0",
        Category: "Fiction",
        image: Catcher
    },
    {
        Name: "1984",
        Author: "George Orwell",
        Description: "A dystopian novel set in a totalitarian society under constant surveillance, focusing on the life of Winston Smith, who dares to defy the omnipresent government.",
        Rating: "4.7",
        Category: "Fiction",
        image: One
    },
    {
        Name: "The Hobbit",
        Author: "J.R.R. Tolkien",
        Description: "A classic fantasy tale of Bilbo Baggins, a hobbit who embarks on an unexpected adventure with dwarves to reclaim their treasure from the dragon Smaug.",
        Rating: "4.6",
        Category: "Fantasy",
        image: Hobbit
    },
    {
        Name: "The Girl with the Dragon Tattoo",
        Author: "Stieg Larsson",
        Description: "A gripping crime thriller about a journalist and a hacker who investigate a decades-old disappearance in Sweden, unraveling dark secrets along the way.",
        Rating: "4.5",
        Category: "Crime",
        image: Dragon
    },
    {
        Name: "Dune",
        Author: "Frank Herbert",
        Description: "A science fiction epic about Paul Atreides, a young man caught in a deadly political intrigue on the desert planet Arrakis, which controls the universe's most valuable resource.",
        Rating: "4.8",
        Category: "Science",
        image: Dune
    },
    {
        Name: "Harry Potter and the Sorcerer's Stone",
        Author: "J.K. Rowling",
        Description: "The first book in the beloved series about Harry Potter, a young wizard who discovers his magical heritage and attends Hogwarts School of Witchcraft and Wizardry.",
        Rating: "4.9",
        Category: "Fantasy",
        image: Harry
    },
    {
        Name: "Gone Girl",
        Author: "Gillian Flynn",
        Description: "A psychological thriller that follows the disappearance of Amy Dunne and the complex investigation into her marriage with Nick, filled with twists and shocking revelations.",
        Rating: "4.3",
        Category: "Crime",
        image: Gone
    },
    {
        Name: "The Martian",
        Author: "Andy Weir",
        Description: "A gripping science fiction story about astronaut Mark Watney, who is stranded on Mars and must use his wits and ingenuity to survive until rescue.",
        Rating: "4.7",
        Category: "Science",
        image: Martian
    }
];

export default Data;