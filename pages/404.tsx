import Link from 'next/link'

const Custom404 = () => (
  <div className="flex-container">
    <div className="text-center">
      <h1>
        <span className="fade-in" id="digit1">
          4
        </span>
        <span className="fade-in" id="digit2">
          0
        </span>
        <span className="fade-in" id="digit3">
          4
        </span>
      </h1>
      <h3 className="fadeIn">СТРАНИЦА НЕ НАЙДЕНА</h3>
      <Link href="/dashboard" passHref legacyBehavior>
        <button type="button" name="button">
          Вернуться на главную
        </button>
      </Link>
    </div>
  </div>
)

export default Custom404
