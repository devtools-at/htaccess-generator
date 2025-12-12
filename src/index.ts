/**
 * .htaccess Generator
 * Generate Apache .htaccess rules
 *
 * Online tool: https://devtools.at/tools/htaccess-generator
 *
 * @packageDocumentation
 */

function escapeHtaccess(text: string): string {
  // Escape quotes and backslashes for safe htaccess output
  return text.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}

// Export for convenience
export default { encode, decode };
