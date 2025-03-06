import {classNames} from "shared/lib/classNames/classNames";
import {Suspense, useEffect, useState} from "react";
import {PageLoader} from "widgets/PageLoader";
import {Navbar} from "widgets/Navbar/ui/Navbar";
import {AppRouter} from "app/providers/route/ui/AppRouter";
import {SideBar} from "widgets/SideBar/ui/SideBar";

const App = () => {
    // const [data, setData] = useState();
    // const apiKey = 'vEJwp3nmtqMIO6FDqQwyQdjbTzJcbdAh';
    // const endpoint = 'https://api.nytimes.com/svc/archive/v1/2024/1.json';
    // const getData = () => {
    //     fetch('/api/svc/archive/v1/2024/1.json?api-key=vEJwp3nmtqMIO6FDqQwyQdjbTzJcbdAh')
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    //         .catch(error => console.error('Ошибка:', error));
    // }
    // useEffect(() => {
    //     getData()
    //     console.log(data)
    // },[])
    return (
        <div className={classNames('app' , {selected:true} , [])}>
            <Suspense fallback={<PageLoader/>}>
                <Navbar/>
                <AppRouter/>
                <SideBar/>
            </Suspense>
        </div>
    );
};

export default App;