import React, { 
  useState, 
  useEffect, 
  ChangeEvent, 
  FormEvent 
} from "react"

import { Wrapper, Card, Templates, Form, Button } from "./styles"

import logo from "../../images/logo.svg"
import logoLight from "../../images/logo-light.svg"

import qs from "qs"

interface Template {
  id: number
  name: string 
  url: string
  height: number
  width: number
  box_count: number
}

export default function Home() {
  const [templates, setTemplates] = useState<any[]>([])
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null)
  const [boxes, setBoxes] = useState<any[]>([])
  const [generatedMeme, setGeneratedMeme] = useState<string | null>(null)

  useEffect(() => {
    (async () => {
      const resp = await fetch("https://api.imgflip.com/get_memes")
      const { data: { memes } } = await resp.json()
      setTemplates(memes)
    })()
  }, [])

  // currying -> função que retorna outra função
  const handleInputChange = (index: number) => (e: ChangeEvent<HTMLInputElement>) => {
    const newValues = boxes
    newValues[index] = e.target.value
    setBoxes(newValues)
  }

  const handleSelectTemplate = (template: Template) => {
    setSelectedTemplate(template)
    setBoxes([])
  }

  const handleSubmit= async (e: FormEvent) => {
    e.preventDefault()

    const params = qs.stringify({
      template_id: selectedTemplate?.id,
      username: "vikayel543",
      password: "vikayel543",
      boxes: boxes.map(text => ({ text })),
    })

    const resp = await fetch(`https://api.imgflip.com/caption_image?${params}`)
    const { data: { url } } = await resp.json()

    setGeneratedMeme(url)
  }

  const handleReset = () => {
    setSelectedTemplate(null)
    setBoxes([])
    setGeneratedMeme(null)
  }

  return (
    <Wrapper>
      <img 
        src={ matchMedia("(prefers-color-scheme: dark)").matches ? logoLight : logo } 
        alt="MemeMaker" 
      />

      <Card>
        {generatedMeme && (
          <>
            <img src={generatedMeme} alt="Generated Meme" style={{maxWidth: 500,}} />
            <Button type="button" onClick={handleReset}>Criar outro meme</Button>
          </>
        )}

        {!generatedMeme && (
          <>
            <h2>Selecione um template</h2>
            <Templates>
              {templates.map((template: Template) => (
                <button
                  key={template.id}
                  type="button"
                  onClick={() => handleSelectTemplate(template)}
                  className={template.id === selectedTemplate?.id ? "selected" : ""}
                >
                  <img src={template.url} alt={template.name} />
                </button>
              ))}
            </Templates>

            {selectedTemplate && (
              <>
                <h2>Textos</h2>
                <Form onSubmit={handleSubmit}>
                  {(new Array(selectedTemplate?.box_count)).fill("").map((_, index) => (
                    <input
                      key={String(Math.random())}
                      placeholder={`Text #${index + 1}`}
                      onChange={handleInputChange(index)}
                      required
                    />
                  ))}
        
                  <Button type="submit">MakeMyMeme!</Button>
                </Form>
              </>
            )}
          </>
        )}
      </Card>
    </Wrapper>
  )
}