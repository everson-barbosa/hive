import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { zodResolver } from "@hookform/resolvers/zod"
import { Helmet } from "react-helmet-async"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { z } from "zod"

const signUpSchema = z.object({
  name: z.string(),
  phone: z.number(),
  email: z.string().email()
})

type SignUpSchema = z.infer<typeof signUpSchema>

export function SignUpPage() {
  const { 
    register, 
    reset,
    handleSubmit, 
    formState: { isSubmitting } 
  } = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    mode: 'onChange'
  })

  const handleSignUp = async (data: SignUpSchema) => {
    await new Promise(resolve => setTimeout(resolve, 3000))

    console.info({ data })

    reset()
  }


  return (
    <>
      <Helmet title="Login" />
      <div className="p-8">
        <Button asChild variant='ghost' className="absolute right-8 top-8">
          <Link to="/sign-in">
            Acessar painel
          </Link>
        </Button>

        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tighter">
              Criar cadastro
            </h1>
            <p>
              Acompanhe suas vendas pelo painel do parceiro!
            </p>
          </div>

          <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Seu nome</Label>
              <Input 
                id="name" 
                type="name" 
                {...register('name')}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Seu celular</Label>
              <Input 
                id="phone" 
                type="tel" 
                {...register('phone')}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="example@email.com" 
                {...register('email')}
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

          <p className="px-6 text-sm text-center leading-relaxed text-muted-foreground">
            Ao continuar, você concorda com nossos {' '}
            <Link to="#terms" className="underline underline-offset-4">termos de serviço</Link> 
            {' '} e {' '} 
            <Link to='#privacity' className="underline underline-offset-4">politícas de privacidade</Link>
          </p>
        </div>
      </div>
    </>
  )
}