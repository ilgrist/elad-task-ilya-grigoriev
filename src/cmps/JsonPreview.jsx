export const JsonPreview = ({ data, level }) => {
  return (
    <>
      {data.map((item, idx) => (
        <div key={idx} className={`json-preview level-${level}`}>
          <p>Id: {item.id}</p>
          <p>SiteName: {item.name}</p>
          <a href={`//${item.url}`} target="_blank">
            Site Url: {item.name}
          </a>
          {item.subData && (
            <JsonPreview data={item.subData} level={level > 4 ? 1 : level + 1} key={idx} />
          )}
        </div>
      ))}
    </>
  );
};
