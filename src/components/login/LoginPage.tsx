import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/label";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/Card";
import { Spinner } from "@/components/ui/icons";
import { useLogin } from "../Login/AuthProvider";

export default function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    //   const [isLoading, setIsLoading] = useState<boolean>(false);
    const { login, loading, error } = useLogin();

    async function onSubmit(event: React.SyntheticEvent) {
        event.preventDefault();
        // setIsLoading(true);
        // get username and password from event
        login(username, password);

        setTimeout(() => {
            //   setIsLoading(false);
        }, 3000);
    }

    return (
        <div className="flex items-center justify-center min-h-screen ">
            <Card className="w-full max-w-md ">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold text-center">
                        Login
                    </CardTitle>
                    <CardDescription className="text-center">
                        Enter your email and password to login to your account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={onSubmit}>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    placeholder="m@example.com"
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                    type="email"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    id="password"
                                    required
                                    type="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="remember" />
                                <label
                                    htmlFor="remember"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Remember me
                                </label>
                            </div>
                        </div>
                        <Button
                            className="w-full mt-6 bg-black text-white"
                            type="submit"
                            disabled={loading}
                        >
                            {loading && <Spinner className="mr-2 h-4 w-4 animate-spin" />}
                            Sign In
                        </Button>
                        {error && (
                            <div className="text-red-600 text-xs">{error.message}</div>
                        )}
                    </form>
                </CardContent>
                <CardFooter className="flex flex-wrap items-center justify-between gap-2">
                    <div className="text-sm text-muted-foreground">
                        <span className="mr-1 hidden sm:inline-block">
                            Don&apos;t have an account?
                        </span>
                        {/* <Link href="#" className="underline">
              Sign up
            </Link> */}
                    </div>
                    {/* <Link href="#" className="text-sm underline">
            Forgot password?
          </Link> */}
                </CardFooter>
            </Card>
        </div>
    );
}
