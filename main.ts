namespace obException {
    /**
     * Attaches code to run in try/catch close.
     * 
     */
    //% blockId="obException_doTry"
    //% block="Run $tryBody and on error jump to $catchBody"
    export function doTry(tryBody: () => void, catchBody: () => void){
        try{
            tryBody()
        }
        catch{
            catchBody()
        }
    }
    /**
     * Attaches code to run in try/catch close.
     *
     */
    //% blockId="obException_doThrow"
    //% block="Throws $msg and runs doTry->catchBody code"
    export function doThrow(msg:string){
        throw msg
    }
}
