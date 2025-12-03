import './PatchNotes.css';
import { useState } from 'react';
import patchNotesData from '../data/patchNotes.json';

const PatchNotes = () => {
  const [patchNotes] = useState(patchNotesData);

  const getVersionTypeLabel = (type) => {
    switch (type) {
      case 'release':
        return '릴리즈';
      case 'beta':
        return '베타';
      case 'alpha':
        return '알파';
      default:
        return '업데이트';
    }
  };

  const getVersionTypeClass = (type) => {
    switch (type) {
      case 'release':
        return 'type-release';
      case 'beta':
        return 'type-beta';
      case 'alpha':
        return 'type-alpha';
      default:
        return '';
    }
  };

  return (
    <section id="patchnotes" className="patch-notes">
      <div className="patch-notes-container">
        <h2 className="section-title">패치노트</h2>
        <div className="patch-notes-list">
          {patchNotes.map((note, index) => (
            <div key={index} className="patch-note-card">
              <div className="patch-note-header">
                <div className="patch-note-version">
                  <span className={`version-type ${getVersionTypeClass(note.type)}`}>
                    {getVersionTypeLabel(note.type)}
                  </span>
                  <h3 className="patch-version-number">v{note.version}</h3>
                </div>
                <span className="patch-date">{note.date}</span>
              </div>
              <div className="patch-note-content">
                <h4 className="changes-title">변경사항</h4>
                <ul className="changes-list">
                  {note.changes.map((change, changeIndex) => (
                    <li key={changeIndex} className="change-item">
                      <span className="change-icon">•</span>
                      {change}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PatchNotes;

