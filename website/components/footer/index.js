import cn from 'clsx'
import { Button } from 'components/button'
import { Link } from 'components/link'
import dynamic from 'next/dynamic'
import s from './footer.module.scss'

const GitHub = dynamic(() => import('icons/github.svg'), { ssr: false })
const LinkedIn = dynamic(() => import('icons/icons8-linkedin-60.svg'), {
  ssr: false,
})

export const Footer = () => {
  return (
    <footer className={cn('theme-light', s.footer)}>
      <div className={cn(s.top, 'layout-grid hide-on-mobile')}>
        <p className={cn(s['first-line'], 'h1')}>
          Your Ideas,
          <br />
          <span className="contrast">My Canvas</span>
        </p>
        <div className={s['shameless-plug']}>
          <p className="h4">Reach Out and Shine Together!</p>
          <p className="p-s">
            Have a project or just want to say hi?
            <br /> My inbox is open for all your ideas and thoughts.
          </p>
        </div>
        <p className={cn(s['last-line'], 'h1')}>
          Let's <span className="hide-on-desktop">&nbsp;</span> <br />
          Collaborate! &nbsp;
        </p>
        <Button
          className={s.cta}
          arrow
          icon={<LinkedIn />}
          href="https://www.linkedin.com/in/krazyykunal/"
        >
          Let's Start a Conversation
        </Button>
      </div>
      <div className={cn(s.top, 'layout-block hide-on-desktop')}>
        <div className={s['shameless-plug']}>
          <p className="h4">Reach Out and Shine Together!</p>
          <p className="p-s">
            Have a project or just want to say hi?
            <br /> My inbox is open for all your ideas and thoughts.
          </p>
        </div>
        <p className={cn(s['first-line'], 'h1')}>
          Your Ideas, <br />
          <span className="contrast">My Canvas</span>
          <br /> Let's <br /> Collaborate!
        </p>
      </div>
      <div className={s.bottom}>
        <div className={s.links}>
          <Link
            className={cn(s.link, 'p-xs')}
            href="https://twitter.com/Kunalsonar007"
          >
            Twitter
          </Link>
          <Link
            className={cn(s.link, 'p-xs')}
            href="https://github.com/Kunalsonar007"
          >
            GitHub
          </Link>
          <Link
            className={cn(s.link, 'p-xs')}
            href="https://linktr.ee/krazyyykunal"
          >
            Linktree
          </Link>
          <Link
            className={cn(s.link, 'p-xs')}
            href="https://www.instagram.com/krazyykunal_21/"
          >
            Instagram
          </Link>
          <Link
            className={cn(s.link, 'p-xs')}
            href="mailto: kunalwankhede958@gmail.com"
          >
            Mail
          </Link>
        </div>
        <p className={cn('p-xs', s.tm)}>
          <span>©</span> {new Date().getFullYear()} Krazyy Kunal ❤️
        </p>
        <Button
          className={cn(s.cta, 'hide-on-desktop')}
          arrow
          icon={<LinkedIn />}
          href="https://www.linkedin.com/in/krazyykunal/"
        >
          Let's Start a Conversation
        </Button>
      </div>
    </footer>
  )
}
