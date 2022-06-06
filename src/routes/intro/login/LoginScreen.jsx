import {IntroButton, TextButton} from "../../../components/buttons";
import {SingleLineTextInput} from "../../../components/input";

function LoginScreen() {
    return (
        <div className="flex flex-col items-center py-6 px-4">
            <div className="container flex justify-start">
                <TextButton label="Cancel" to="/"></TextButton>
            </div>

        
            <form className="container flex flex-col items-center mt-32">
                <SingleLineTextInput id="username" type="email" placeholder="email"></SingleLineTextInput>
                <SingleLineTextInput id="password" type="password" placeholder="password"></SingleLineTextInput>
                <div className="container flex justify-center mt-32">
                    <IntroButton label="Login" to="/app/HomeScreen"></IntroButton>
                </div>
            </form>
            
        </div>
    );
}
  
export default LoginScreen;