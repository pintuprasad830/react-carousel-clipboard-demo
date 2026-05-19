import { useState } from "react"

export function ClipboardDemo() {

    const [status, setStatus] = useState('');

    function handleCopy(e) {

        setStatus(`${e.target.value} Copied`);

    }

    function handleBlur() {

        setStatus('');

    }

    function handlePaste() {

        document.onpaste = function () {

            return false;

        }

    }

    return (

        <div className="container p-3">

            <dl>

                <dt>Account Number</dt>

                <dd><input type="text" onBlur={handleBlur} onCopy={handleCopy} /></dd>

                <dd>{status}</dd>

                <dt>Verify Account</dt>

                <dd><input onPaste={handlePaste} type="text" /></dd>

            </dl>

        </div>

    )

}



