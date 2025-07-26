import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Tech',
  description: 'Tools and gadgets in loving use.',
}

export default function Tech() {
  return (
    <SimpleLayout
      title="Tools and gadgets in use."
      intro="Here’s a big list of all of the things I build with."
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="14” MacBook Pro, M1 Pro, 16GB RAM (2021)">
            I was using an Intel-based 16” MacBook Pro prior to this and the
            difference is night and day. Apple kinda cooked here, not gonna lie.
          </Tool>
          <Tool title="Apple Studio Display">
            Totally splurged on this one. I’m a sucker for a good display, and this 
            one does not disappoint.
          </Tool>
          <Tool title="Varmilo Minilo 75% with Kailh Presitge Silent Switches">
            Best keyboard I’ve ever used. Makes typing a delight. Purchase inspired 
            by <a href="https://world.hey.com/dhh/finding-acoustical-delight-in-the-thock-aa84f70b" target="_blank" rel="noopener noreferrer">DHH’s blog post </a> 
            on mechanical keyboards.
          </Tool>
          <Tool title="Apple Magic Trackpad">
            Something about all the gestures makes me feel like a wizard with
            special powers. I really like that feeling.
          </Tool>
          <Tool title="Herman Miller Sayl Chair">
            Might as well sit in a chair that’s designed to be comfortable.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="Cursor">
            Obviously.
          </Tool>
          <Tool title="Claude Code">
            Best agentic AI coding tool I’ve used.
          </Tool>
          <Tool title="Promptfoo">
            Best package for evals out there.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Figma">
            Another obvious choice.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="Notion">
            Pretty decent docs platform, waiting to try one that is better.
          </Tool>
          <Tool title="Jira">
            Because I have to.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
