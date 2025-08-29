import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, MapPin, Phone } from "lucide-react";

const contactInfo = [
	{
		icon: <Mail className="w-6 h-6" />,
		label: "Email",
		value: "robertosilva.comercial@gmail.com",
		href: "mailto:robertosilva.comercial@gmail.com",
		color: "text-blue-400",
	},
	{
		icon: <Github className="w-6 h-6" />,
		label: "GitHub",
		value: "github.com/RobertoSilvaDevFullStack",
		href: "https://github.com/RobertoSilvaDevFullStack",
		color: "text-slate-400",
	},
	{
		icon: <Linkedin className="w-6 h-6" />,
		label: "LinkedIn",
		value: "linkedin.com/in/roberto-silva-dev-full-stack",
		href: "https://www.linkedin.com/in/roberto-silva-dev-full-stack/",
		color: "text-blue-500",
	},
	{
		icon: <MapPin className="w-6 h-6" />,
		label: "Localização",
		value: "São Paulo, SP - Brasil",
		href: null,
		color: "text-green-400",
	},
];

export const Contact = () => {
	return (
		<section id="contact" className="py-24 relative">
			<div className="container mx-auto px-6">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-16 slide-in-up">
						<h2 className="text-4xl md:text-5xl font-bold mb-6">
							<span className="bg-gradient-primary bg-clip-text text-transparent">
								Vamos Conversar
							</span>
						</h2>
						<p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
							Estou sempre aberto a novas oportunidades e colaborações.
							<br />
							Entre em contato para discutirmos como posso contribuir para o seu
							próximo projeto.
						</p>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
						{/* Informações de Contato */}
						<div className="space-y-6 fade-in-delayed">
							<h3 className="text-2xl font-semibold text-foreground mb-6">
								Informações de Contato
							</h3>

							{contactInfo.map((contact, index) => (
								<Card
									key={contact.label}
									className="group bg-glass border-glass backdrop-blur-glass hover-lift transition-all duration-300"
									style={{
										animationDelay: `${index * 0.1}s`,
									}}
								>
									<CardContent className="p-6">
										{contact.href ? (
											<a
												href={contact.href}
												target={contact.href.startsWith("http")
													? "_blank"
													: undefined}
												rel={contact.href.startsWith("http")
													? "noopener noreferrer"
													: undefined}
												className="flex items-center gap-4 hover:text-primary transition-colors"
											>
												<div
													className={`${contact.color} group-hover:text-primary transition-colors p-2 bg-primary/10 rounded-lg`}
												>
													{contact.icon}
												</div>
												<div>
													<h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
														{contact.label}
													</h4>
													<p className="text-muted-foreground group-hover:text-foreground transition-colors">
														{contact.value}
													</p>
												</div>
											</a>
										) : (
											<div className="flex items-center gap-4">
												<div
													className={`${contact.color} p-2 bg-primary/10 rounded-lg`}
												>
													{contact.icon}
												</div>
												<div>
													<h4 className="font-semibold text-foreground">
														{contact.label}
													</h4>
													<p className="text-muted-foreground">
														{contact.value}
													</p>
												</div>
											</div>
										)}
									</CardContent>
								</Card>
							))}
						</div>

						{/* Call to Action */}
						<div className="flex flex-col justify-center space-y-8 animate-slide-in-right">
							<div className="bg-glass border-glass backdrop-blur-glass rounded-lg p-8 text-center">
								<h3 className="text-2xl font-semibold text-foreground mb-4">
									Pronto para começar um projeto?
								</h3>
								<p className="text-muted-foreground mb-6 leading-relaxed">
									Tenho experiência em desenvolvimento web moderno e estou sempre
									buscando novos desafios. Vamos criar algo incrível juntos!
								</p>

								<div className="flex flex-col sm:flex-row gap-4 justify-center">
									<Button
										size="lg"
										className="bg-gradient-primary hover:shadow-glow-primary hover-glow transition-all duration-300"
										asChild
									>
										<a href="mailto:robertosilva.comercial@gmail.com">
											<Mail className="w-5 h-5 mr-2" />
											Enviar Email
										</a>
									</Button>

									<Button
										variant="outline"
										size="lg"
										className="border-glass hover:bg-glass hover:text-primary hover-lift"
										asChild
									>
										<a
											href="https://www.linkedin.com/in/roberto-silva-dev-full-stack/"
											target="_blank"
											rel="noopener noreferrer"
										>
											<Linkedin className="w-5 h-5 mr-2" />
											LinkedIn
										</a>
									</Button>
								</div>
							</div>

							{/* Status de Disponibilidade */}
							<div className="bg-glass border-glass backdrop-blur-glass rounded-lg p-6 text-center">
								<div className="flex items-center justify-center gap-3 mb-3">
									<div className="w-3 h-3 bg-green-400 rounded-full animate-bounce-subtle"></div>
									<span className="text-green-400 font-semibold">
										Disponível para projetos
									</span>
								</div>
								<p className="text-sm text-muted-foreground">
									Responderei em até 24 horas
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};