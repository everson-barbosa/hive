import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { zodResolver } from "@hookform/resolvers/zod"
import { Helmet } from "react-helmet-async"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { toast } from "sonner"
import { z } from "zod"

const signInSchema = z.object({
  email: z.string().email(),
  password: z.string()
})

type SignInSchema = z.infer<typeof signInSchema>

export function SignInPage() {
  const { 
    register, 
    reset,
    handleSubmit, 
    formState: { isSubmitting } 
  } = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
    mode: 'onChange'
  })

  const handleSignIn = async (data: SignInSchema) => {
    await new Promise(resolve => setTimeout(resolve, 3000))

    toast.success('Enviamos um e-mail para o seu', {
      action: {
        label: 'Reenviar',
        onClick: () => { handleSignIn(data) }
      }
    })

    console.info({ data })

    reset()
  }


  return (
    <>
      <Helmet title="Login" />
      <div className="p-8">
        <Button asChild variant='ghost' className="absolute right-8 top-8">
          <Link to="/sign-up">
            Criar cadastro
          </Link>
        </Button>

        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tighter">
              Acessar painel
            </h1>
            <p>
              Acompanhe suas vendas pelo painel do parceiro!
            </p>
          </div>

          <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="example@email.com" 
                {...register('email')}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Sua senha</Label>
              <Input 
                id="password" 
                type="password" 
                {...register('password')}
              />
            </div>

            <Button 
              className="w-full" 
              type="submit"
              disabled={isSubmitting}
            >
              Acessar o painel
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}