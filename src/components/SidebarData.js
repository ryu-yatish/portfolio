import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import YouTubeIcon from '@material-ui/icons/YouTube';
import PaletteIcon from '@material-ui/icons/Palette';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';

export const SidebarData = [
    {
        title: "Home",
        icon: <HomeIcon />,
        link:"/home"
    },
    {
        title: "Youtube",
        icon: <YouTubeIcon />,
        link:"/youtube"
    },
    {
        title: "Art",
        icon: <PaletteIcon />,
        link:"/art"
    },
    {
        title: "Miscellaneous",
        icon: <BubbleChartIcon />,
        link:"/miscellaneous"
    },
    {
        title: "About",
        icon: <BubbleChartIcon />,
        link:"/about"
    },

]