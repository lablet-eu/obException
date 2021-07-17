namespace obException {
    /**
     * Attaches code to run in try/catch close.
     * 
     */
    //% blockId="obException_doTry"
    //% block="Runs your code and catches a doThrow message"
    export function doTry(tryBody: () => void):void{
        try{
            tryBody()
        }
        catch{
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
