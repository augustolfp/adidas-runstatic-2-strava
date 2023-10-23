import TokenRequestForm from "./TokenRequestForm";
import GetCode from "./GetCode";

export default function GetCredentials() {
    return (
        <div className="flex flex-col gap-4">
            <h4 className="font-medium text-base-content">
                Follow the steps below:
            </h4>
            <ol className="list-roman list-inside">
                <GetCode />

                <div className="divider divider-vertical"></div>

                <li>
                    You received a <span className="italic">code</span> at the
                    previus step. Now when can use it to request an Access Token
                    that will give us the desired permissions. Fill this form
                    and submit:
                    <TokenRequestForm />
                </li>
            </ol>
        </div>
    );
}
