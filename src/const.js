
export const routes=[
    {
        name:"Home",
        link:"/"
    },
    {
        name:"Services",
        link:"/services",
        subroutes:[
            {
                name:"Web Dev",
                link:"/services/web"
            },
            {
                name:"App Dev",
                link:"/services/app"
            },
            {
                name:"UI/UX Designing",
                link:"/services/uiux"
            },
        ]
    },
    {
        name:"Projects",
        link:"/projects"
    },
    {
        name:"About",
        link:"/about"
    }
]