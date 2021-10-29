import useScript from '../hooks/useScript'

export default function ScriptComponent(){
    const {loading, error} = useScript(
        "https://code.jquery.com/jquery-3.6.0.min.js"
    )

        
    if (loading) {
        return <div>Loading ...</div>
    }
    if (error) {
        return <div>Error</div>
    }
    return (
        <div>
            <h1>useScript hook 11</h1>
           {/*  .{$(window).width()} */}
            <p>Este hook nos permite usar facilmente scripts como los que provienen de:</p>
            <p> jquery, check out in stripe or other microservices that need to run scripts</p>
        </div>
        )
}
