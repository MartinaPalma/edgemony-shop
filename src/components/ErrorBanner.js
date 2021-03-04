import "./ErrorBanner.css";


function ErrorBanner({ isError, setRetry, retry, closeError}) {
    return (
        <div className="ErrorBanner">
            <div className="ErrorSpan">
            <span>{ isError }</span>
            {/* <div className="retrybtn"> */}
            <button type="button" className="retrybtn" onClick={() => setRetry()}>Retry</button>
            {/* <div className="closebtn"> */}
            {/* <button type="button"  onClick={() => onClose()} >x</button> */}
            <button type="button" className="closebtn" onClick={() => closeError()}>x</button>
        </div>
        </div>
        // </div>
    )
}
// { isError && (
//    
//   )}

export default ErrorBanner