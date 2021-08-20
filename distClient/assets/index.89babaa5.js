import{R as e,h as a,ak as t,U as s,r,f as l}from"./vendor.8839be9f.js";const n=({img:s,name:r,location:l,time:n})=>e.createElement("div",{className:"overflow-hidden transition-transform transform bg-white rounded-md shadow dark:bg-gray-800 group w-[300px] flex-shrink-0 calendar-event cursor-pointer"},e.createElement("div",{className:"relative h-56 bg-cover",style:{backgroundImage:`url(${s||"https://cdn.dribbble.com/users/1626229/screenshots/15031394/media/eef54ce87566d4217c4340a3049ff77c.jpg?compress=1&resize=1000x750"})`}},e.createElement("div",{className:"flex items-end w-full h-full bg-gradient-to-t from-blue-800 dark:from-gray-900"},e.createElement("div",{className:"p-4"},e.createElement("div",{className:"flex items-center space-x-1 font-medium text-green-300"},e.createElement(a,{className:"w-6 h-6"}),e.createElement("div",{className:"text-sm"},l||"Some where")),e.createElement("div",{className:"font-semibold text-gray-50"},r||"Name of the event"),e.createElement("div",{className:"text-sm text-gray-50"},n||"Saturday, Sep 14, 2019 at 20:30 PM"))),e.createElement("div",{className:"absolute p-2 text-gray-100 transition-opacity duration-300 ease-in-out bg-green-600 rounded opacity-0 bg-opacity-80 top-2 left-2 group-hover:opacity-100"},e.createElement(a,{className:"w-6 h-6"})),e.createElement("div",{className:"absolute p-2 text-gray-100 transition-opacity duration-300 ease-in-out bg-gray-400 rounded opacity-0 bg-opacity-80 top-2 right-2 group-hover:opacity-100"},e.createElement(t,{className:"w-6 h-6"}))));var m=s((({className:a})=>{const t=r.exports.useRef(null);let s=l.utils.selector(t);return r.exports.useEffect((()=>{const e=l.timeline();return e.from(s(".main-axis"),{opacity:0}),e.from(s(".day-item"),{y:200,stagger:{each:.1,from:0,grid:"auto"},duration:.5}),e.from(s(".day-circle"),{opacity:0,stagger:{each:.1,from:0,grid:"auto"}},"-=0.5"),e.from(s(".day-name"),{opacity:0,stagger:{each:.1,from:0,grid:"auto"}},"-=0.5"),e.from(s(".calendar-event"),{opacity:0,stagger:{each:.1,from:0,grid:"auto"},duration:.2}),()=>{}}),[]),e.createElement("div",{className:`${a} container mx-auto px-6 space-y-6 py-2`},e.createElement("div",{className:"text-3xl font-bold dark:text-gray-50"},"Calendar"),e.createElement("div",{className:"relative",ref:t},e.createElement("div",{className:"absolute top-0 bottom-0 left-0 w-0.5 -translate-x-1/2 bg-blue-500 main-axis"}),e.createElement("div",{className:"space-y-4"},e.createElement("div",{className:"relative space-y-4 day-item"},e.createElement("div",{className:"relative pl-4 text-xl font-semibold dark:text-gray-50"},e.createElement("div",{className:"absolute left-0 w-3 h-3 -translate-x-1/2 -translate-y-1/2 bg-blue-500 rounded-full top-1/2 shadow-neon day-circle"}),e.createElement("div",{className:"day-name"},e.createElement("span",{className:""},"Tuesday, 17 August 2021"),e.createElement("div",{className:"text-sm font-medium text-gray-400"},"2 events"))),e.createElement("div",{className:"flex ml-4 space-x-2 overflow-auto"},e.createElement(n,{location:"Orlando,Mimana",time:"Tuesday, 17 August 2021, 07:00 PM",name:"Origami Crane Wedding Planners",img:"https://shopkingsgate.co.uk/wp-content/uploads/2019/10/GAMING-2019_DigitalArtboards_Mobile-banner.jpg"}),e.createElement(n,{location:"Tokyo,Japanes",time:"Tuesday, 17 August 2021, 6:00 PM",name:"Mosaic Events",img:"https://i.pinimg.com/originals/a5/4e/e9/a54ee9e19a708ff036b65ed6b29e5113.png"})),e.createElement("div",{className:"relative space-y-4 day-item"},e.createElement("div",{className:"relative pl-4 text-xl font-semibold dark:text-gray-50"},e.createElement("div",{className:"absolute left-0 w-3 h-3 -translate-x-1/2 -translate-y-1/2 bg-blue-500 rounded-full top-1/2 shadow-neon day-circle"}),e.createElement("div",{className:"day-name"},e.createElement("span",{className:""},"Monday, 10 October 2021"),e.createElement("div",{className:"text-sm font-medium text-gray-400"},"3 events"))),e.createElement("div",{className:"flex ml-4 space-x-2 overflow-x-auto"},e.createElement(n,{location:"Masya,Taiwan",time:"Monday, 10 October 2021, 9:00 AM",name:"Electronic Events",img:"https://img.freepik.com/free-vector/music-event-poster-template-with-colorful-shapes_1361-1591.jpg?size=626&ext=jpg"}),e.createElement(n,{location:"Sadnes, Kiomo",time:"Monday, 10 October 2021, 3:30 PM",name:"Yukino Yukinoshite",img:"https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/131937051/original/9718ba4691185f5300554f3f7da7c5adc4dae886/poster-design-for-events.png"}),e.createElement(n,{location:"Yamita, Shata",time:"Monday, 10 October 2021, 4:00 PM",name:"Object can be null",img:"https://channel.mediacdn.vn/thumb_w/640/2019/11/8/photo-2-15732207505351867040976.jpg"}))),e.createElement("div",{className:"relative space-y-4 day-item"},e.createElement("div",{className:"relative pl-4 text-xl font-semibold dark:text-gray-50"},e.createElement("div",{className:"absolute left-0 w-3 h-3 -translate-x-1/2 -translate-y-1/2 bg-blue-500 rounded-full top-1/2 shadow-neon day-circle"}),e.createElement("div",{className:"day-name"},e.createElement("span",{className:""},"Sunday, 02 December 2021"),e.createElement("div",{className:"text-sm font-medium text-gray-400"},"2 events"))),e.createElement("div",{className:"flex ml-4 space-x-2 overflow-x-auto"},e.createElement(n,{location:"Gitema , Sanko",time:"Sunday, 02 December 2021, 09:00 PM",name:"Binding Kameha",img:"https://pbs.twimg.com/media/Cw_pksQXEAAZkWg.jpg"}),e.createElement(n,{location:"Sita , Meta",time:"Sunday, 02 December 2021, 10:30 PM",name:"Kanja, Napa",img:"https://asialive365.com/wp-content/uploads/2016/11/Alan-Walker-Announce-Poster-Master.jpg"})))))))}))``;export default m;
