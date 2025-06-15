"use client";

import { useState } from "react";
import { SidebarProps } from "@/types/product";
import styles from "./sidebar.module.css";

const Sidebar: React.FC<SidebarProps> = () => {
  const [expandedSections, setExpandedSections] = useState<{
    [key: string]: boolean;
  }>({
    customizable: false,
    idealFor: true,
    occasion: false,
    work: false,
    fabric: false,
    segment: false,
    suitableFor: false,
    rawMaterials: false,
    pattern: false,
  });

  const [idealForSelections, setIdealForSelections] = useState<{
    [key: string]: boolean;
  }>({
    all: false,
    men: false,
    women: false,
    babyAndKids: false,
  });

  const toggleSection = (section: string): void => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleIdealForChange = (key: string, checked: boolean): void => {
    setIdealForSelections((prev) => ({
      ...prev,
      [key]: checked,
    }));
  };

  const unselectAll = (): void => {
    setIdealForSelections({
      all: false,
      men: false,
      women: false,
      babyAndKids: false,
    });
  };

  return (
    <aside
      className={styles.sidebar}
      role="complementary"
      aria-label="Product filters"
    >
      {/* Customizable Checkbox */}
      <div className={styles.customizableSection}>
        <label className={styles.customizableOption}>
          <input type="checkbox" className={styles.customizableCheckbox} />
          <span className={styles.customizableLabel}>CUSTOMIZABLE</span>
        </label>
      </div>

      {/* Ideal For */}
      <div className={styles.filterSection}>
        <button
          className={styles.filterHeader}
          onClick={() => toggleSection("idealFor")}
          aria-expanded={expandedSections.idealFor}
        >
          <span className={styles.filterTitle}>IDEAL FOR</span>
          <span
            className={`${styles.arrow} ${
              expandedSections.idealFor ? styles.arrowUp : styles.arrowDown
            }`}
          >
            ∨
          </span>
        </button>
        {expandedSections.idealFor && (
          <div className={styles.filterOptions}>
            <button className={styles.unselectAllButton} onClick={unselectAll}>
              Unselect All
            </button>
            <label className={styles.filterOption}>
              <input
                type="checkbox"
                checked={idealForSelections.all}
                onChange={(e) => handleIdealForChange("all", e.target.checked)}
              />
              <span className={styles.filterLabel}>All</span>
            </label>
            <label className={styles.filterOption}>
              <input
                type="checkbox"
                checked={idealForSelections.men}
                onChange={(e) => handleIdealForChange("men", e.target.checked)}
              />
              <span className={styles.filterLabel}>Men</span>
            </label>
            <label className={styles.filterOption}>
              <input
                type="checkbox"
                checked={idealForSelections.women}
                onChange={(e) =>
                  handleIdealForChange("women", e.target.checked)
                }
              />
              <span className={styles.filterLabel}>Women</span>
            </label>
            <label className={styles.filterOption}>
              <input
                type="checkbox"
                checked={idealForSelections.babyAndKids}
                onChange={(e) =>
                  handleIdealForChange("babyAndKids", e.target.checked)
                }
              />
              <span className={styles.filterLabel}>Baby and kids</span>
            </label>
          </div>
        )}
      </div>

      {/* Occasion */}
      <div className={styles.filterSection}>
        <button
          className={styles.filterHeader}
          onClick={() => toggleSection("occasion")}
          aria-expanded={expandedSections.occasion}
        >
          <span className={styles.filterTitle}>OCCASION</span>
          <span
            className={`${styles.arrow} ${
              expandedSections.occasion ? styles.arrowUp : styles.arrowDown
            }`}
          >
            ∨
          </span>
        </button>
        {expandedSections.occasion && (
          <div className={styles.filterOptions}>
            <div className={styles.filterLabel}>All</div>
          </div>
        )}
      </div>

      {/* Work */}
      <div className={styles.filterSection}>
        <button
          className={styles.filterHeader}
          onClick={() => toggleSection("work")}
          aria-expanded={expandedSections.work}
        >
          <span className={styles.filterTitle}>WORK</span>
          <span
            className={`${styles.arrow} ${
              expandedSections.work ? styles.arrowUp : styles.arrowDown
            }`}
          >
            ∨
          </span>
        </button>
        {expandedSections.work && (
          <div className={styles.filterOptions}>
            <div className={styles.filterLabel}>All</div>
          </div>
        )}
      </div>

      {/* Fabric */}
      <div className={styles.filterSection}>
        <button
          className={styles.filterHeader}
          onClick={() => toggleSection("fabric")}
          aria-expanded={expandedSections.fabric}
        >
          <span className={styles.filterTitle}>FABRIC</span>
          <span
            className={`${styles.arrow} ${
              expandedSections.fabric ? styles.arrowUp : styles.arrowDown
            }`}
          >
            ∨
          </span>
        </button>
        {expandedSections.fabric && (
          <div className={styles.filterOptions}>
            <div className={styles.filterLabel}>All</div>
          </div>
        )}
      </div>

      {/* Segment */}
      <div className={styles.filterSection}>
        <button
          className={styles.filterHeader}
          onClick={() => toggleSection("segment")}
          aria-expanded={expandedSections.segment}
        >
          <span className={styles.filterTitle}>SEGMENT</span>
          <span
            className={`${styles.arrow} ${
              expandedSections.segment ? styles.arrowUp : styles.arrowDown
            }`}
          >
            ∨
          </span>
        </button>
        {expandedSections.segment && (
          <div className={styles.filterOptions}>
            <div className={styles.filterLabel}>All</div>
          </div>
        )}
      </div>

      {/* Suitable For */}
      <div className={styles.filterSection}>
        <button
          className={styles.filterHeader}
          onClick={() => toggleSection("suitableFor")}
          aria-expanded={expandedSections.suitableFor}
        >
          <span className={styles.filterTitle}>SUITABLE FOR</span>
          <span
            className={`${styles.arrow} ${
              expandedSections.suitableFor ? styles.arrowUp : styles.arrowDown
            }`}
          >
            ∨
          </span>
        </button>
        {expandedSections.suitableFor && (
          <div className={styles.filterOptions}>
            <div className={styles.filterLabel}>All</div>
          </div>
        )}
      </div>

      {/* Raw Materials */}
      <div className={styles.filterSection}>
        <button
          className={styles.filterHeader}
          onClick={() => toggleSection("rawMaterials")}
          aria-expanded={expandedSections.rawMaterials}
        >
          <span className={styles.filterTitle}>RAW MATERIALS</span>
          <span
            className={`${styles.arrow} ${
              expandedSections.rawMaterials ? styles.arrowUp : styles.arrowDown
            }`}
          >
            ∨
          </span>
        </button>
        {expandedSections.rawMaterials && (
          <div className={styles.filterOptions}>
            <div className={styles.filterLabel}>All</div>
          </div>
        )}
      </div>

      {/* Pattern */}
      <div className={styles.filterSection}>
        <button
          className={styles.filterHeader}
          onClick={() => toggleSection("pattern")}
          aria-expanded={expandedSections.pattern}
        >
          <span className={styles.filterTitle}>PATTERN</span>
          <span
            className={`${styles.arrow} ${
              expandedSections.pattern ? styles.arrowUp : styles.arrowDown
            }`}
          >
            ∨
          </span>
        </button>
        {expandedSections.pattern && (
          <div className={styles.filterOptions}>
            <div className={styles.filterLabel}>All</div>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
