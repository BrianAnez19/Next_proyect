const timeline = [
    {
      id: "0",
      avatar: "https://image.shutterstock.com/image-vector/people-icon-isolated-flat-design-600w-401277397.jpg",
      username: "wongmjane",
      message: `Twitter Web App now runs ES6+ for modern browsers*, reducing the polyfill bundle size by 83%
    
    (gzipped size went from 16.6 KB down to 2.7 KB!!)
    
    * Chrome 79+, Safari 14+, Firefox 68+`,
    },
    {
      id: "1",
      avatar: "https://image.shutterstock.com/image-vector/people-icon-flat-design-600w-448748842.jpg",
      username: "midudev",
      message: "Wow, devter está funcionando y vivo 🦉",
      name: "Miguel Ángel Durán",
    },
    {
      id: "2",
      username: "d4nidev",
      name: "Daniel de la Cruz",
      avatar: "https://image.shutterstock.com/image-vector/user-sign-icon-person-symbol-600w-407039926.jpg",
      message: `Abro paraguas Paraguas
    
    Clean Code es un libro obsoleto que en 2020, con los paradigmas de desarrollo de software que manejamos, puede hacerte más daño que beneficio.`,
    },
    {
      id: "3",
      avatar: "https://image.shutterstock.com/image-vector/people-icon-isolated-flat-design-600w-401277397.jpg",
      username: "wongmjane",
      message: `Twitter Web App now runs ES6+ for modern browsers*, reducing the polyfill bundle size by 83%
    
    (gzipped size went from 16.6 KB down to 2.7 KB!!)
    
    * Chrome 79+, Safari 14+, Firefox 68+`,
    },
    {
      id: "4",
      avatar: "https://image.shutterstock.com/image-vector/people-icon-flat-design-600w-448748842.jpg",
      username: "midudev",
      message: "Wow, devter está funcionando y vivo 🦉",
      name: "Miguel Ángel Durán",
    },
    {
      id: "5",
      username: "d4nidev",
      name: "Daniel de la Cruz",
      avatar: "https://image.shutterstock.com/image-vector/user-sign-icon-person-symbol-600w-407039926.jpg",
      message: `Abro paraguas Paraguas
    
    Clean Code es un libro obsoleto que en 2020, con los paradigmas de desarrollo de software que manejamos, puede hacerte más daño que beneficio.`,
    },
    {
      id: "6",
      avatar: "https://image.shutterstock.com/image-vector/people-icon-isolated-flat-design-600w-401277397.jpg",
      username: "wongmjane",
      message: `Twitter Web App now runs ES6+ for modern browsers*, reducing the polyfill bundle size by 83%
    
    (gzipped size went from 16.6 KB down to 2.7 KB!!)
    
    * Chrome 79+, Safari 14+, Firefox 68+`,
    },
    {
      id: "7",
      avatar: "https://image.shutterstock.com/image-vector/people-icon-flat-design-600w-448748842.jpg",
      username: "midudev",
      message: "Wow, devter está funcionando y vivo 🦉",
      name: "Miguel Ángel Durán",
    },
    {
      id: "8",
      username: "d4nidev",
      name: "Daniel de la Cruz",
      avatar: "https://image.shutterstock.com/image-vector/user-sign-icon-person-symbol-600w-407039926.jpg",
      message: `Abro paraguas Paraguas
    
    Clean Code es un libro obsoleto que en 2020, con los paradigmas de desarrollo de software que manejamos, puede hacerte más daño que beneficio.`,
    },
    {
      id: "9",
      avatar: "https://image.shutterstock.com/image-vector/people-icon-isolated-flat-design-600w-401277397.jpg",
      username: "wongmjane",
      message: `Twitter Web App now runs ES6+ for modern browsers*, reducing the polyfill bundle size by 83%
    
    (gzipped size went from 16.6 KB down to 2.7 KB!!)
    
    * Chrome 79+, Safari 14+, Firefox 68+`,
    },
    {
      id: "10",
      avatar: "https://image.shutterstock.com/image-vector/people-icon-flat-design-600w-448748842.jpg",
      username: "midudev",
      message: "Wow, devter está funcionando y vivo 🦉",
      name: "Miguel Ángel Durán",
    },
    {
      id: "11",
      username: "d4nidev",
      name: "Daniel de la Cruz",
      avatar: "https://image.shutterstock.com/image-vector/user-sign-icon-person-symbol-600w-407039926.jpg",
      message: `Abro paraguas Paraguas
    
    Clean Code es un libro obsoleto que en 2020, con los paradigmas de desarrollo de software que manejamos, puede hacerte más daño que beneficio.`,
    },
  ]
  
  export default (req, res) => {
    res.statusCode = 200
    res.setHeader("Content-Type", "application/json")
    res.send(JSON.stringify(timeline))
  }