import {classNames} from "shared/lib/classNames/classNames";
import {Suspense, useEffect, useState} from "react";
import {PageLoader} from "widgets/PageLoader";
import {Navbar} from "widgets/Navbar/ui/Navbar";

const App = () => {
    const [data, setData] = useState();
    const apiKey = 'vEJwp3nmtqMIO6FDqQwyQdjbTzJcbdAh';
    const endpoint = 'https://api.nytimes.com/svc/archive/v1/2024/1.json';
    const getData = () => {
        fetch(`${endpoint}?api-key=${apiKey}`)
            .then(res => res.json())
            .then(data => console.log(data))
    }
    useEffect(() => {
        getData()
        console.log(data)
    },[])
    return (
        <div className={classNames('app' , {selected:true} , [])}>
            <Suspense fallback={<PageLoader/>}>
                <Navbar/>
                <div>{}</div>

            </Suspense>
        </div>
    );
};

export default App;