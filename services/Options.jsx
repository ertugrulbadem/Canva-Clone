import { Blend, Component, Folder, Home, Image, LayoutDashboardIcon, LayoutTemplate, Minus, Palette, Settings, ShapesIcon, Sparkle, Square, SquareRoundCorner, Trash, Type, WalletCardsIcon } from "lucide-react";
import BackgroundSetting from "./Components/BackgroundSetting";
import AddImageSetting from "./Components/AddImageSetting";
import Elements from "./Components/Elements";
import FillColor from "./Sharable/FillColor";
import BorderColor from "./Sharable/BorderColor";
import BorderWidth from "./Sharable/BorderWidth";
import Opacity from "./Sharable/Opacity";
import BorderRadius from "./Sharable/BorderRadius";
import AiTransformSetting from "./Components/AiTransformSetting";

export const Workspacemenu=[
    {
        name: "Home",
        icon: Home,
        path: "/workspace"
    },
    {
        name: "Projects",
        icon: Folder,
        path: "/workspace/projects"
    },
    {
        name: "Templates",
        icon: LayoutDashboardIcon,
        path: "/workspace/templates"
    },
    {
        name: "Billing",
        icon: WalletCardsIcon,
        path: "/workspace/billing"
    }
]

export const canvasSizeOptions = [
    {
        name: "Instagram Post",
        width: 500,
        height: 500,
        icon: "/instagram.png"
    },
    {
        name: "Instagram Story",
        width: 1080,
        height: 1600,
        icon: "/instagram.png"
    },
    {
        name: "YouTube Thumbnail",
        width: 1280,
        height: 720,
        icon: "/youtube.webp"
    },
    {
        name: "YouTube Banner",
        width: 1600,
        height: 900,
        icon: "/youtube.webp"
    },
    {
        name: "YouTube Post",
        width: 1200,
        height: 1200,
        icon: "/youtube.webp"
    },
    {
        name: "PowerPoint Slide",
        width: 1600,
        height: 900,
        icon: "/ppt.png"
    },
    {
        name: "Flyer (A4)",
        width: 1125,
        height: 1550,
        icon: "/paper.png"
    },
    {
        name: "Facebook Post",
        width: 1200,
        height: 630,
        icon: "/facebook.webp"
    },
    {
        name: "Twitter Post",
        width: 1600,
        height: 900,
        icon: "/twitter.png"
    },
    {
        name: "LinkedIn Post",
        width: 1200,
        height: 627,
        icon: "/linkedin.png"
    },
    {
        name: "Pinterest Pin",
        width: 1080,
        height: 1500,
        icon: "/pinterest.png"
    },
]

export const sideBarMenu = [
    {
        name: "Templates",
        desc: "Select Prebuild Template",
        icon: LayoutTemplate
    },
    {
        name: "Elements",
        desc: "Select Shapes and Stickers",
        icon: ShapesIcon,
        component: <Elements />
    },
    {
        name: "Images",
        desc: "Add Image or Upload your own",
        icon: Image,
        component: <AddImageSetting />
    },
    {
        name: "Text",
        desc: "Add Text and Heading",
        icon: Type
    },
    {
        name: "AI",
        desc: "More AI Feature to enhance your design",
        icon: Sparkle,
        component: <AiTransformSetting />
    },
    {
        name: "Background",
        desc: "Change Canvas Background",
        icon: Component,
        component: <BackgroundSetting />
    },
    {
        name: "Settings",
        desc: "Update Canvas Size and background",
        icon: Settings
    },
]

export const ShapeList = [
    {
        name: "Circle",
        icon: "/moon.png"
    },
    {
        name: "Square",
        icon: "/square.webp"
    },
    {
        name: "Triangle",
        icon: "/triangle.png"
    },
    {
        name: "Line",
        icon: "/line.png"
    }
]

export const shapesSettingsList = [
    {
        name: "Fill",
        icon: Palette,
        component: <FillColor />
    },
    {
        name: "Stroke Color",
        icon: Square,
        component: <BorderColor />
    },
    {
        name: "Stroke Width",
        icon: Minus,
        component: <BorderWidth />
    },
    {
        name: "Opacity",
        icon: Blend,
        component: <Opacity />
    },
    {
        name: 'Rounded Corner',
        icon: SquareRoundCorner,
        component: <BorderRadius />
    }
    // {
    //     name: "Delete",
    //     icon: Trash
    // }
]


export const AITransformationSettings = [
    {
        name: "Background Remove",
        command: "e-bgremove",
        image: "/remove-bg.png"
    },
    {
        name: "Change Background",
        command: "e-changebg-prompt-snow",
        image: "/change-bg.webp",
        input: true
    },
    {
        name: "Generative fill",
        command: "bg-genfill,w-1000,h-960,cm-pad_resize",
        image: "/generative-fill.jpg"
    },
    {
        name: "AI drop shadow",
        command: "e-dropshadow",
        image: "/shadow.png"
    },
    {
        name: "Upscale",
        command: "e-upscale",
        image: "/upscale.png"
    },
    {
        name: "Smart crop",
        command: "fo-auto",
        image: "/smartcrop.webp"
    },
]