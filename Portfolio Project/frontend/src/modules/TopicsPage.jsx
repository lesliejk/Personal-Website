function TopicsPage(){
    return (
        <>
        <h2>Web Dev Concepts</h2>

        <nav class="local">
            <a href="#webServers">Web Servers</a>
            <a href="#frontendDesign">Frontend Design</a>
            <a href="#optimizingImages">Optimizing Images</a>
            <a href="#favicons">Favicons</a>
            <a href="#css">CSS</a>
            <a href="#forms">Forms</a>
            <a href="#express">Express</a>
            <a href="#javascript">JavaScript</a>
        </nav>

        <article id="webServers">
            <h3>Web Servers</h3>

            <p>
                Most <strong>Web Servers</strong> are designed such that the keystroke "/" following the <strong>URL</strong> is mapped to index.html. This could vary depending on the website. For example, some websites may use default.html, index.js, or index.php. 
                The characters following the period provide some insight on which language that page uses. For this page, I am using <strong>HTML (HyperText Markup Language)</strong>, however other pages may use <strong>JS (JavaScript)</strong> or PHP (Hypertext Preprocessor). 
                Additional, developers can add routing information to determine how the path to the home page is interpreted. 
            </p>
            <p>
                There are very few details on <strong>Chrome's Inspector</strong> for local files. The notable details on the Network tab include Request URL, Request Method, Last-Modified, and Content-Type. When accessing the same file via the web, there are many more details as to where and how the resource is being accessed.
                Some notable details not found for the local file are Connection, Server, Date, Remote Address, Cache-Control, User-Agent, Host, and Age. All of these, including more not listed, are related to the <strong>TCP/IP</strong> connection that needs to be established between my computer and the web server.
                This connection is not needed when accessing locally stored files, which is why those details are missing.
            </p>
            <p>
                The status code of favicon.ico is 200. This means that favicon.ico, short for "favorites icon," was found in the response body. This file is provided automatically by the OSU server. The other 2 files, <strong>CSS (Cascading Style Sheets)</strong> and JS (JavaScript), are languages for styling and adding interactivity retrospectively.
                This page currently does not have scripts for either of those languages, resulting in the status 404.
            </p>
            <p>
                For reference, the URL for my webpage is https://web.engr.oregonstate.edu/~kongle/a1-kongle/. The <strong>scheme</strong> is "https://" which identifies the protocol. In this case, it is encrypted <strong>HTTP</strong>. The subdomains are "web." & "engr.", which is followed by the host domain "oregonstate.edu."
                The URL ends with the path to the resource, which is "al-kongle/index.html."
            </p>
        </article>

        <article id="frontendDesign">
            <h3>Frontend Design</h3>

            <p>
                The concept of <strong>frontend design</strong> encompasses everything surrounding the user experience. This includes visual design, the graphical user interface, and interactivity. Frontend design is extremely important, especially for companies that want to ensure that consumers can find what they want, but also return in the future. 
                A product could be useful in theory, but fail to help or meet the needs of the user with poor frontend design.
            </p>

            <h4>The five "E"s of usability</h4>
            <dl>
                <dt><strong>Effective</strong></dt>
                <dd>The app or product should be helpful in users reaching their desired goal.</dd>

                <dt><strong>Efficient</strong></dt>
                <dd>Users should be able to complete their task with minimal steps.</dd>

                <dt><strong>Enjoyable and/or Engaging</strong></dt>
                <dd>The app or product should meet the needs of their target audience and be enjoyable and useful enough for the users to return to.</dd>

                <dt><strong>Easy to use</strong></dt>
                <dd>New users should be able to navigate and use the product with little or no prior knowledge.</dd>

                <dt><strong>Error-free</strong></dt>
                <dd>The product should work as intended with little or no errors. Additionally, it should be able to reduce user errors and/or work regardless of such errors.</dd>
            </dl>
            

            <h4>Layout Tags</h4>

            <p>
                The <strong>&lt;header&gt;</strong> <strong>element</strong> is typically used for the banner or masthead and includes the name, publisher, and slogan. It is normal for this header to appear throughout the site to show users they are still on the same site. 
                The <strong>&lt;nav&gt;</strong> element is used to help users navigate to other parts of the site. Some familiar destinations might be main menu, store, tools, location, FAQ, and contact us.
                The <strong>&lt;main&gt;</strong> portion is used to designate the main content of the page, usually unique to that page itself. It would not include the header, navigation, and advertisements that would appear on multiple pages.
                The <strong>&lt;section&gt;</strong> element is used to denote specific related groups of content where there are multiple articles covering those topics. An example might be a sports section that shows all the game stats, analytics, and sports opinion pieces.
                The <strong>&lt;article&gt;</strong> element is typically found within sections, articles would be the actual 'content.'
                The <strong>&lt;footer&gt;</strong> is typically found at the end of the page. A user might find legal information, trademarks, copyright statements, contact info, or links to other pages here.
            </p>

            <h4>Linking pages</h4>
            <ol>
                <li>External content - Links to external content are often done with <strong>absolute paths</strong>. This means that the whole URL is included in the <strong>hyperlink.</strong></li>
                <li>Internal content - The 'hashtag' (#) symbol is used with its ID. If a tag has an ID attribute, it could be used for an <strong>anchor</strong> to jump to it on the same page.</li>
                <li>Page to page - Links to different pages utilizes <strong>relative URLs</strong>. The relative URL will depend on where the destination page is relative to the current page. If the destination page is located in the same directory, the name of the file could be used. If the page is not in the same directory, a mix of syntax could be used. Adding ".." in front of the path will go up one directory and "/folder" will go into a designated folder. For example, a relative URL of "../folder3/index.html" would go up one directory, then go into the folder3 directory and open the index.html page.</li>
            </ol>
            
        </article>

        <article id="optimizingImages">
            <h3>Optimizing Images</h3>

            <p>
                There are 6 specifications that optimized images should have: descriptive file name, small file size, exact dimensions, proper file format, reduce resolution, and color mode. 
                File should be named to account for <strong>search engine optimization (SEO)</strong>. Take for example the first photo in the gallery, which is named detective-pikachu-plushie-display.jpg. This helps differentiate the photo from artwork or plastic displays. 
                Small file size help reduce load times for smaller devices. A phone does not need the same quality photo compared to a 70-inch television. 
                Exact dimensions are important so that a user can see the entire image on their screen and browser without scrolling or resizing themselves. 
                File formats are dependent on what is being displayed. Photos are usually in .JPG, line-art images and graphics are typically in .GIF or .PNG, especially if transparency is needed.
                Resolution is similar to file size in that photos and images should have the proper resolution based on the user display. Now it is typical to have the same image in multiple resolutions so that the proper one could be served to the user.
                <strong>Color Mode</strong> refers to settings that developers use to display colors. A common one is RGB for .JPG and .PNG file types and Indexed for .GIF file types.
            </p>

            <p>
                Photos would generally use .JPG (short for JPEG or Joint Photographic Experts Group) or WebP file formats. Photos frequently have millions of colors with lots of details. In order to reduce the load on web servers, these are compressed down to a smaller file size. WebP allows for more compression than it's JPG counterpart.
                Line-art is most common found as .PNG (Portable Network Graphic), .SVG (Scalable Vector Graphics), or .GIF (Graphics Interchange Format) file formats. PNG files allow for true transparency, but may be pixelated. SVG files are mathematically-derived and are great for interactive or animated images. GIF files can have 8-bit transparency and might show animations; you might already be familiar with animated GIFs.
            </p>
        </article>

        <article id="favicons">
            <h3>Favicons</h3>

            <p>
                <strong>Favicons</strong> are symbols used by developers to help users quickly identify a site or application. They can be saved in .GIF, .PNG, .ICO, and .SVG file formats. As resolutions and devices change, these file formats may also change in the future. 
                The process starts with a symbol, such as a company logo. The symbol is then modified and optimized to work for many devices or form factors. Typically, this means simplifying the symbol so that it is easily identifiable as a small icon while maintaining its identity.
                Some devices might require &lt;link&gt; tags in order to render properly.
            </p>

        </article>

        <article id="css">
            <h3>Cascading Style Sheets</h3>

            <p>
                There are many reasons to incorporate stylesheets in a website or app. Arguably, the most important reason is for a better user experience. Stylesheets could not only improve readability, but also help users navigate to different parts of the website. Additionally, stylesheets allow webpages to adapt to different devices, providing a good experience to all users regardless of their device.
                A great benefit for developers is that they could make changes that modify an entire website or just a single part. Stylesheets also help maintain consistency and cohesion across an entire website or application. 
            </p>

            <p>
                Here are various ways to incorporate styles sheets. The first method is &lt;link&gt;ing the stylesheet in the global &lt;head&gt; of the website, which is the method this website currently uses. This method can provide styles to all the pages on the website. Also, you may link another stylesheet after the global stylesheet or import it inside the global stylesheet itself.
                Another method is to directly code in the style in the HTML file itself by using the &lt;style&gt; tag. This would only change the style of the code contained in the style tag. 
                It is also possible to assign an attribute to a specific element. For example, if I wanted to make a h3 header pink with a white background, I could do so with this piece of code: &lt;h3 style="color:pink"&gt; &lt;h3 style="background-color:white"&gt;
                Finally, you may also use JavaScript to manipulate the <strong>Document Object Model</strong>, which might look like this: "document.getElementsByTagName('h3').style.color = 'pink'" & "document.getElementsByTagName('h3').style.background-color = 'white'".
            </p>

        </article>

        <article id="forms">
            <h3>Forms</h3>

            <p>In order for a form to be accessible, there are some key qualities it should have. 
                Labels should have clear instructions and communicate why specific information is required.
                The first field should be set to autofocus so that the users know when form inputs begin and can start immediately.
                Forms should be able to accept multiple forms of input such as keyboard, virtual keyboards, mouse clicks, or trackpad clicks.
                Complex forms should have tab indexing to clarify which the order in which fields need to be filled.
                Validation messages should be clear and readable on multiple devices.
            </p>

            <p>
                The major tags for forms are <strong>&lt;form&gt;, &lt;fieldset&gt; and &lt;legend&gt;, &lt;label&gt;, &lt;input&gt;, &lt;select&gt; with &lt;options&gt;, &lt;textarea&gt;, and &lt;button&gt;.</strong>
                &lt;form&gt; has the attributes <strong>action</strong> and <strong>method</strong>. Action determines where the form request is sent while method determines the HTTP method used in the HTTP request went after submission.
                &lt;fieldset&gt; and &lt;legend&gt; are used to separate a form into logical chunks. The form on this website has separate field sets and legends for contact info, suppliers and vendors, and attendees.
                &lt;label&gt; is used to help define what a form control is for. An input field with no label tell the user very little on what the field is for.
                &lt;input&gt; takes an input from the user. Parameters can be defined so that only certain inputs are accepted. A type and name could also be defined in the backend so that the value can be stored and pulled later.
                &lt;select&gt; with &lt;options&gt; provides a dropdown to the user to pick from. It is very useful when there are many options, but only 1 needs to be selected such as States.
                &lt;textarea&gt; gives the user a text box where they can input multiple lines of text.
                &lt;button&gt; requires a form of activation such as a keyboard press or mouse click. It performs the action that is defined in the &lt;form&gt; tag.
            </p>

            <p>There are many ways a developer can create forms to be more user-friendly; here are some considerations to keep in mind. 
                As with the rest of the website, a form should be easy on the eyes and readable.
                Any fields that require user interaction should be built with mobile in mind. These fields should be big enough so that it is easy for a user to accurately access it with their fingers.
                The fields should also provide feedback to the user in regard to requirements and data validation.
                Autofocus should be set to the first field. 
                Field sets and legends should communicate to the user which parts of the form contain specific questions. 
            </p>
        </article>

        <article id="express">
            <h3>Express</h3>

            <p>
                <strong>Node.js</strong> is an open source, cross-platform runtime environment which helps by simplifying web application development. It proves access to a host of library and JavaScript modules, one of which is npm which automatically comes with the Node installation.
                <strong>npm</strong> is an online repository for publishing Node packages. It can be used to access and manage packages open source packages developed by the developer community. These packages also automatically download any dependencies they require, making use of them even easier.
                <strong>Express</strong> is a framework which provides an <strong>Application Programming Interface (API)</strong> of various common tasks for web applications. Express allows us to get, post, and delete data. It also allows use to serve static pages, create forms that take data, and incorporate that data into curated responses.
            </p>


        </article>

        <article id="javascript">
            <h3>JavaScript</h3>

            <p>
                The main data types are numbers, Boolean values (True/False), strings, symbols, special (null/undefined), and objects. 
                Objects in JavaScript are name-value pairs, in Python these are dictionaries. These pairs are called the properties of the object.
            </p>

            <p>
                Objects allow us to create, read, update, and delete properties of the object <strong>(CRUD)</strong>. You could also access a specific property value using "object." syntax.
                Arrays in JavaScript are objects in which the property names are automatically assigned numbers in ascending order (0,1,2,...,n). In Python these would be lists. As such, each property value could be accessed using their index value like so: arrayName[1] as well as iterated through.
                <strong>JSON</strong> is short of JavaScript Object Notation and is a widely used format to exchange data between applications. Different languages may code objects different, but JSON allows different languages to convert their objects to JSON or convert JSON to objects in the proper language. In JavaScript JSON.stringify() and JSON.parse() is used to do this.
            </p>

            <p>
                Conditionals are pieces of code that only run when specific conditions are met, similar to a forked road. This is usually done with if-else statements or switch statements in JavaScript.
                Loops are pieces of code that continue to run for a set number of times or until a condition is met. This could be dangerous as you could end up with an infinite loop if a condition is impossible to meet. The most common loops are for loops a while loops. Both could be used to accomplish a similar task, but generally "for loops" have an idea on how many times it would run while "while loops" might not.
            </p>

            <p>
                <strong>Object-oriented programming</strong> is equivalent to classes in other programming languages. These classes could hold both data and functions that allow for manipulation of their properties. A class object could be seen as an entire system housed within itself.
            </p>

            <p>
                <strong>Functional programming</strong> refers to the features that are available to functions as "first-class" values. This means that functions, similar to the type "string," could be assigned to variables, receive other functions as arguments, and return functions. Additionally, functions could be built with a default value or task if an argument is not received. As a result, functions are incredibly powerful and adaptable. Building functions with these capabilities in mind are key when developing applications.
            </p>
        </article>
        </>
    )
}
export default TopicsPage;