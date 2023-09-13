export default function Projects() {
    return (<>
        <ul className="project-container">
            <a className="card" href="https://gitfront.io/r/jimknaka/TKnLXwHNvsvj/videogame-database-website/">
            <li>
                <img src="\src\assets\VGD.png" alt="VGD" className="VGD"/>
                <h1>Videogame Database Website</h1>
                <p>RESTful API server with ASP.NET and Vue.js/Bootstrap client. New users can register accounts, view/search the database, create custom lists (currently played/playing/ want to play), post reviews/ratings/comments, view your profile that contains all your reviews/ratings/comments/custom lists. Admins can add/edit games within the database, delete current users/reviews/ratings/comments. Used SSMS for SQL database and Postman to test server-side results.</p>
                </li>
            </a>
            <a className="card" href="https://gitfront.io/r/jimknaka/tWmSgxKAa7cd/tenmo-payment/">
            <li>
                <img src="\src\assets\Tenmo-payment.png" alt="tenmo" className="tenmo"/>
                <h1>Tenmo Payment App</h1>
                <p>RESTful API server with ASP.NET and command-line application in Visual Studio using C#. New users can register accounts, log-in with JWT authentication, send/request money, approve/reject requests, and view past and pending transfers. Used SSMS for SQL database and Postman to test server-side results.</p>
                </li>
            </a>
            <a className="card" href="https://gitfront.io/r/jimknaka/iqJkEPPFCDsE/candy-shop/">
            <li>
                <img src="\src\assets\CandyShop.png" alt="candyshop" className="candyshop"/>
                <h1>CandyShop</h1>
                <p>Is a C# application that simulates a cash register at a candy store. It keeps track of your balance, the shop's inventory and logs a receipt of the transaction.</p>
                </li>
            </a>
        </ul>
    </>)
}