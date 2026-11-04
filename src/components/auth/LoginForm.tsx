import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

function LoginForm() {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight">
          Sign in to your account
        </h2>
      </div>

      <div>
        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" name="email" />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" name="password" />
          </div>

          <div>
            <Button className="w-full" type="submit">Login</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
