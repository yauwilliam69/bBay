import React, {useEffect, useState } from "react";

const Catalog = () => {

    const [catalog, setCatalog] = useState();

    const getCatalog = () => {
    axios
        .get("http://localhost:3002/catalog") //THIS IS YOUR URL OF YOUR API
        .then((data) => setData(data.data)) //PROMISE API, THAT MEANS WHEN YOU GET THE DATA WHAT DO I DO WITH IT
        .catch((error) => console.log(error));  //ERROR CATCHING IN CASE WE RECIEVE AN ERROR
    };

    return (
    <div style={{ maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto'}}>
        {
        data && data.map(d =>
            <Post title={d.title} body={d.body} comments={d.comments} id={d.id} key={d.id} />
        )
        }

        <NewPost updatePosts={getPostsData} />
    </div>
    )

}


export default Catalog;