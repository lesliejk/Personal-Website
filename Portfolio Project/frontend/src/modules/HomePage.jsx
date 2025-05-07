function HomePage(){
    return (
        <>
            <h2>Home Page</h2>
            <article>
                <h3>Career Goals</h3>
                <p>After 8 years of accounting, I decided it was time to take a leap and make a big change in my life. I had always had an interest in coding and dabbled a little in the past, but for various reasons, I had never fully committed to learning how to code until now. Videos games have been a big hobby and passion of mine for my entire life, and I hope to be able to create my own game in the future. 
                </p>
                <h3>Technologies used for this website</h3>
                    <dl>
                        <dt><strong>MongoDB</strong></dt>
                        <dd>MongoDB is a NoSQL Database Management System. This means that they use a document-oriented approach as opposed to a relational table approach. Documents are stored in JSON, which allows for flexible usage across many languages. They also provide hosting services to run on their servers.</dd>

                        <dt><strong>Express</strong></dt>
                        <dd>Express is a framework which provides an Application Programming Interface (API) of various common tasks for web applications. Express allows us to get, post, and delete data. It also allows use to serve static pages, create forms that take data, and incorporate that data into curated responses.</dd>

                        <dt><strong>React</strong></dt>
                        <dd>React is a framework for writing frontend applications. Original developed by Facebook, it is now developed open source. Reach applications are built around components which act as individual units of UI. This means that components can be developed separately and be plugged into a larger function. Additional, changes are done through variables in their individual components. This means that instead of re-rendering an entire page when a change is detected, only the component and related sections are reloaded.</dd>
                        
                        <dt><strong>Single Page Application (SPA)</strong></dt>
                        <dd>Reach used a single page application structure. While a traditional webpage might send a request when a user navigates to different areas of the website, an SPA sends everything to the user once and adjusts the DOM tree client side. This gives the user the illusion of a traditional webpage, but everything is handle on their own server/system. Additional requests are only sent to the server when CRUD operations are conducted.</dd>

                        <dt><strong>Node</strong></dt>
                        <dd>Node.js is an open source, cross-platform runtime environment which helps by simplifying web application development. It proves access to a host of library and JavaScript modules, one of which is npm which automatically comes with the Node installation.</dd>
                        
                        <dt><strong>JavaScript, HTML, & JSX</strong></dt>
                        <dd>These are the primary languages used on this website, JSX being a combination of both HTML and JavaScript. HTML is the primary language used to structure webpages, while JavaScript allows developers to add interactivity to the webpages. </dd>

                        <dt><strong>Cascading Style Sheets (CSS)</strong></dt>
                        <dd>Cascading Style Sheets is a style sheet language used to adjust the style of a document. Although simple in nature, CSS is as integral as the underlying code itself in providing the user a workable and readable webpage.</dd>

                    </dl>
                <p></p>
            </article>
        </>
    )
}
export default HomePage;