//% color=#008060 weight=100 icon="\uf017" block="obException"
namespace obException {
    /**
     * Attaches code to run in try/catch close.
     * 
     */
    //% blockId="obException_doTry"
    //% block="do $tryBody and $catchBody"
    export function doTry(tryBody: () => void, catchBody: () => void): void {
        try{
            tryBody()
        }
        catch{
            catchBody()
        }
    }
}
