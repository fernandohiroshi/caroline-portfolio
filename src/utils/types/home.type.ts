export interface HomeProps {
  object: {
    slug: string
    title: string
    metadata: {
      hero: {
        titulo: string
        subtitulo: string
      }
      perfil: {
        titulo: string
        bio: string
        foto: {
          url: string
          imgix_url: string
        }
      }

      experiencia: ExperienciaProps[]
      formacao: FormacaoProps[]
      portfolios: {
        branding: {
          url: string
        }
        social: {
          url: string
        }
        uiux: {
          url: string
        }
        fotografia: {
          url: string
        }
        posters: {
          url: string
        }
        desenhos: {
          url: string
        }
      }
      contact: {
        telefone: string
        email: string
      }
    }
  }
}

interface ExperienciaProps {
  empresa: string
  cargo: string
  tempo_de_trabalho: string
}

interface FormacaoProps {
  curso: string
  instituicao: string
}
