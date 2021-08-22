export default function Link({ pageLinks }) {
    return (
        pageLinks.map(({ id, url, title }) => (
            <li key={id}>
              <a href={url} target="_blank" rel="noreferrer" className="flex bg-gray-200 justify-center px-2 py-4 mb-2 rounded hover:no-underline hover:bg-gray-300 transform hover:-translate-y-1 hover:scale-110 transition duration-300 ease-in-out">
                {title}
              </a>
            </li>
        ))
    );
}