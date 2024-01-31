import { AppstoreOutlined, DashboardOutlined, ProjectOutlined, ShopOutlined } from "@ant-design/icons";
import{IResourceItem} from "@refinedev/core";



interface IMenuTitle {
    name: string;
}

export const resources: (IResourceItem | IMenuTitle)[] = [
    {
        name: "Menu Title",
        
    },
    
    {
        name: "App", 
        list: "/",
        meta: {
            label: "App",
            icon: <DashboardOutlined />
        }
    },

    {
        name: "Companies", 
        list: "/companies",
        create: "/create/new",
        edit: "/companies/edit/id",
        meta: {
            label: "Companies",
            icon: <ShopOutlined />
        },
    },

    {
        name: "Tasks", 
        list: "/tasks",
        create: "/tasks/new",
        edit: "/tasks/edit/id",
        meta: {
            label: "Tasks",
            icon: <ProjectOutlined />
        },
    }
];