function NoMatch() {
    return(
        <div className="nomatch">
            <h1 className="colorblue">MyReads</h1>
            <h1 className="colorred">404 Error</h1>
            <div>
                The page selected is not valid.
                <br/>
                Please, use the back arrow to see the previous page.
            </div>
        </div>
    )
};

export default NoMatch;