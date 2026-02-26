import {
  AlignmentType,
  HeadingLevel,
  IRunOptions,
  ShadingType,
} from "docx";

export const COLORS = {
  primary: "1B3A5C",       // Dark blue
  secondary: "2C5F8A",     // Medium blue
  accent: "3A7DC9",        // Light blue
  text: "333333",          // Dark gray
  lightGray: "F5F5F5",     // Light gray background
  white: "FFFFFF",
  black: "000000",
  // Placeholder tier colors
  requiredBg: "FFE0E0",   // Light red
  requiredText: "CC0000",  // Red text
  suggestedBg: "FFF9E0",  // Light yellow
  suggestedText: "996600", // Dark yellow text
  optionalBg: "E0FFE0",   // Light green
  optionalText: "006600",  // Dark green text
  // Compliance status colors
  compliant: "006600",
  partial: "996600",
  nonCompliant: "CC0000",
} as const;

export const FONT = {
  name: "Calibri",
  sizes: {
    title: 56,        // 28pt (half-points)
    subtitle: 32,     // 16pt
    heading1: 36,     // 18pt
    heading2: 28,     // 14pt
    heading3: 24,     // 12pt
    heading4: 22,     // 11pt
    body: 22,         // 11pt
    small: 18,        // 9pt
    tableHeader: 20,  // 10pt
    tableBody: 20,    // 10pt
  },
} as const;

export const SPACING = {
  afterTitle: 400,
  afterHeading1: 200,
  afterHeading2: 160,
  afterHeading3: 120,
  afterParagraph: 120,
  afterListItem: 60,
  lineSpacing: 276,   // 1.15 line spacing (240 = single)
} as const;

export function getHeadingLevel(level: number): (typeof HeadingLevel)[keyof typeof HeadingLevel] {
  switch (level) {
    case 1: return HeadingLevel.HEADING_1;
    case 2: return HeadingLevel.HEADING_2;
    case 3: return HeadingLevel.HEADING_3;
    case 4: return HeadingLevel.HEADING_4;
    default: return HeadingLevel.HEADING_1;
  }
}

export function getPlaceholderStyle(
  tier: "REQUIRED" | "SUGGESTED" | "OPTIONAL"
): { shading: { type: (typeof ShadingType)[keyof typeof ShadingType]; fill: string }; run: Partial<IRunOptions> } {
  switch (tier) {
    case "REQUIRED":
      return {
        shading: { type: ShadingType.CLEAR, fill: COLORS.requiredBg },
        run: { color: COLORS.requiredText, bold: true },
      };
    case "SUGGESTED":
      return {
        shading: { type: ShadingType.CLEAR, fill: COLORS.suggestedBg },
        run: { color: COLORS.suggestedText, bold: false },
      };
    case "OPTIONAL":
      return {
        shading: { type: ShadingType.CLEAR, fill: COLORS.optionalBg },
        run: { color: COLORS.optionalText, bold: false },
      };
  }
}

export const PAGE_SIZES = {
  LETTER: { width: 12240, height: 15840 },  // 8.5" x 11" in twips
  A4: { width: 11906, height: 16838 },       // 210mm x 297mm in twips
} as const;

export const MARGINS = {
  top: 1440,     // 1 inch
  bottom: 1440,
  left: 1440,
  right: 1440,
} as const;
